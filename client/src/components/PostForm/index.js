import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const PostForm = () => {
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