import React, { useState } from 'react';
import { Card, Button, Form } from 'semantic-ui-react';

import { useMutation } from '@apollo/react-hooks';
import { CREATE_COMMENT_MUTATION } from '../../utils/mutations';
import DeleteButton from '../../components/DeleteButton';


const CommentForm = ({ postId }) => {

    const [commentBody, setCommentBody] = useState('');
    //const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(CREATE_COMMENT_MUTATION)

    const handleChange = event => {
        setCommentBody(event.target.value);
        console.log(commentBody);
         
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        

        try {
            addComment({
                variables: { postId, commentBody }
            });

            setCommentBody('');
            
        } catch (e) {
            console.error(e);
        }
    };

    
  return (
      
     
        <Card fluid>
            <Card.Content>
            <p>Add a Review</p>
            <Form onSubmit={handleFormSubmit}>
                <div className="ui action input fluid">
                <input
                            placeholder="Add review text here..."
                            value={commentBody}
                            className="form-input col-12 col-md-9"
                            onChange={handleChange}
                            />

                        <Button type="submit" 
                        className="ui button instagram">
                        Submit
                        </Button>

                       

                    </div>
                </Form>
                {error && <div>Error; try again.....</div>}
            </Card.Content>
       
        </Card>
    

  );
};

export default CommentForm;