import React, { useState } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';

import { useMutation } from '@apollo/react-hooks';
import { CREATE_COMMENT_MUTATION } from '../../utils/mutations';



const CommentForm = ({ postId }) => {

    const [commentBody, setCommentBody] = useState('');
    //const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(CREATE_COMMENT_MUTATION);

    const handleChange = event => {
        setCommentBody(event.target.length);
         
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentBody, postId }
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
            <form>
                <div className="ui action input fluid">
                <input
                            placeholder="Add review text here..."
                            value={commentBody}
                            className="form-input col-12 col-md-9"
                            onChange={handleChange}
                            />

                        <Button className="btn col-12 col-md-3" type="submit">
                        Submit
                        </Button>


                    </div>
                </form>
            </Card.Content>
       
        </Card>

  );
};

export default CommentForm;