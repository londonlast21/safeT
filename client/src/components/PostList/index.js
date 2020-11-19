import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import moment from 'moment';


const PostCard = ({ posts, name, type, location, createdAt,  comments}) => {
if (!posts) {
    return <h3>No Added Providers</h3>
}

    //if there are posts, generate card 
    return (
        <Card fluid>
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>
                    <ul>
                        <li>{type}</li>
                        <li>{location}</li>
                        
                    
                    </ul>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <p>Reviews:{comments}</p>

            <Button>
                Leave Review
            </Button>
            
            </Card.Content>
        </Card>
    )



}
    


export default PostCard;