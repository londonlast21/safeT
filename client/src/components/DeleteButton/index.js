import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Button, Icon, Confirm } from 'semantic-ui-react';

import { QUERY_POSTS } from '../../utils/queries';

function DeleteButton({ postId, commentId, callback }){

    const [confirmOpen, setConfirmOpen] = useState(false);

    const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;


    const [deletePostOrMutation] = useMutation(mutation, {
        update(proxy){
            setConfirmOpen(false);
            if(!commentId){
                const data = proxy.readQuery({
                    query: QUERY_POSTS
                });
                data.getPosts = data.getPosts.filter((p) => p.id !== postId);
                console.log(data);
                // remove post in cache
                proxy.writeQuery({ query: QUERY_POSTS, data });
            }
            if (callback) callback();
            window.location.reload();
        },
        variables: {
            postId,
            commentId
        },

        
    });

    
    return(
        <>
        <Button
                as="div"
                color="red"
                floated="right"
                onClick={() => setConfirmOpen(true)}
            >
                <Icon name="trash" style={{ margin: 0 }} />
        </Button>
        <Confirm
            open={confirmOpen}
            onCancel={() => setConfirmOpen(false)}
            onConfirm={deletePostOrMutation}
        />
        </>
    )

    

}

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId: ID!){
        deletePost(postId: $postId)
    }
`;

const DELETE_COMMENT_MUTATION = gql`
    mutation deleteComment($postId: ID!, $commentId: ID!){
        deleteComment(postId: $postId, commentId: $commentId){
            id
            comments{
                id username createdAt commentBody
            }
            commentCount
        }
    }
`
;

export default DeleteButton;