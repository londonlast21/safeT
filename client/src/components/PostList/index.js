import React from 'react';
import { Button, Card } from 'semantic-ui-react';
//import moment from 'moment';
import { Link } from 'react-router-dom';


const PostCard = ({ posts, createdAt, comments}) => {
if (!posts) {
    return <h3>No Added Providers</h3>
}

    //if there are posts, generate card 
    return (
        <Card fluid className="post-card">
              <Card.Content className="card-content">
                <Card.Header as={Link} to={`/post/${posts._id}`}>{posts.name}</Card.Header>
                <Card.Meta>added by {posts.username}</Card.Meta>
                <Card.Description>
                    <ul className="card-data">
                        <li>{posts.type}</li>
                        <li>{posts.location}</li>
                        
                    
                    </ul>
                </Card.Description>
            </Card.Content>
            <Card.Content extra className="comment-form">
            <h4>Reviews:</h4>
               <p> {comments}</p>

            <Button as={Link} to={`/post/${posts._id}`}>
                Leave Review
            </Button>
            
            </Card.Content>
        </Card>
    )



}
    


export default PostCard;