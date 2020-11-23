import React from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_SINGLE_POST } from '../utils/queries';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';

import { Card, Grid } from 'semantic-ui-react';


const SinglePost = props => {

    const { id: postId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId }
    });

    const post = data?.post || {}

    if (loading) {
        return <div>Loading still....</div>
    }
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>

                    <Card fluid>
                        <Card.Content>
                            <Card.Header>{post.name}</Card.Header>
                            <Card.Meta>{moment(post.createdAt).fromNow(true)}</Card.Meta>
                            <Card.Description>
                                <ul>
                                    <li>{post.type}</li>
                                    <li>{post.location}</li>
                                </ul>
                            </Card.Description>
                            
                        </Card.Content>
                        <hr/>
                        </Card>
                        <CommentList comments ={post.comments} />

                    </Grid.Column>
                </Grid.Row>
                {Auth.loggedIn() && <CommentForm postId={post._id} />}
            </Grid>

        )
    }




export default SinglePost