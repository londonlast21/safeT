import React from 'react';
import PostList from '../components/PostList';

import { Grid } from 'semantic-ui-react';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
    
    console.log('hit beginning of query posts in home.js');
    

    // make query request to database here
    const { data, loading } = useQuery(QUERY_POSTS );
    console.log(data);
    const posts = data?.posts || [];
    console.log(posts);
    



    return (
        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Homepage</h1>
            </Grid.Row>

            <Grid.Row>
            <div>
                <p>Posts list here</p>
            </div>
             

            </Grid.Row>
        </Grid>
    );
}

export default Home;