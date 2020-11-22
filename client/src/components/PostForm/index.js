import React, { useState } from 'react';
import { useForm } from '../../utils/hooks';
import { Form, Button } from 'semantic-ui-react';

import { useMutation } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../../utils/queries';
import { CREATE_POST_MUTATION, CREATE_COMMENT_MUTATION } from '../../utils/mutations';

function PostForm(){


    // define post values
    const { values, onChange, onSubmit } = useForm(addPostCallback, {
        name: '',
        location: '',
        type: ''
    });

    console.log('hit post front');

    const [addPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        update(cache, { data: { addPost } } ) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] }
                });

            } catch (e) {
                console.error(e);
            }
        }
    })


    // define post callback
    function addPostCallback(){

        console.log('hit cllbk success post');
        addPost();
        window.location.reload();
    }


  return (
    <>
    <Form onSubmit={onSubmit}>
        <h2>Add a Provider</h2>
        <Form.Field>

            <Form.Input
                placeholder="Sample medical provider"
                name="name"
                onChange={onChange}
                value={values.name}
                error={error ? true : false}
                />

            <Form.Input
                placeholder="Provider location"
                name="location"
                onChange={onChange}
                value={values.location}
                error={error ? true : false}
                />

            <Form.Input
                placeholder="Type of professional/specialty"
                name="type"
                onChange={onChange}
                value={values.type}
                error={error ? true : false}
                />
            
            <Button type="submit" color="instagram" >
                Submit
            </Button>
        </Form.Field>
    </Form>
    
    
    {error && (
        <div className="ui error message" style={{ margin: 10 }}>
            <ul className="list">
                <li>{error.graphQLErrors[0].message}</li>
            </ul>
        </div>
    )}
</>
);
};

export default PostForm;