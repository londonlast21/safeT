import React, { useContext } from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
//import moment from 'moment';
import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton';

import { AuthContext } from '../../context/auth';


const PostCard = ({ posts: { name, type, _id, username, location }, comments}) => {

    const { user } = useContext(AuthContext);
    console.log(username);


    //if there are posts, generate card 
    return (
        <Card fluid>
              <Card.Content className="card-content">
                <Card.Header as={Link} to={`/post/${_id}`}>{name}</Card.Header>
                <Card.Meta>added by {username}</Card.Meta>
                <Card.Description>
                    <ul className="card-data">
                        <li>{type}</li>
                        <li>{location}</li>
                        
                    
                    </ul>
                </Card.Description>
            </Card.Content>
            <Card.Content extra className="comment-form">
            <h4>Reviews:</h4>
               <p> {comments}</p>

            <Button as={Link} to={`/post/${_id}`}>
                Leave Review
            </Button>

            {user && user.username === username && <DeleteButton postId={_id} />}
          
            
            </Card.Content>
        </Card>
    )



}
    


export default PostCard;