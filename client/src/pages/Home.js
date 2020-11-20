import React from 'react';
import PostCard from '../components/PostList';

import { Grid } from 'semantic-ui-react';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';

import Auth from '../utils/auth';

const Home = () => {

    const loggedIn = Auth.loggedIn();
    
    console.log('hit beginning of query posts in home.js');
    

    // make query request to database here
    const { data, loading } = useQuery(QUERY_POSTS );
    console.log(data);
    const posts = data?.posts || [];
    console.log(posts);
    



    return (
        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>SafeT Directory</h1>
            </Grid.Row>

            {/* {loggedIn && (
            <Grid.Column>
                // post form goes here
            </Grid.Column>
            )} */}

            <Grid.Row>
            {posts &&
              posts.map((posts) => (
                <Grid.Column key={posts.id} style={{ marginBottom: 20 }}>
                  <PostCard posts={posts} />
                </Grid.Column>
              ))}

            </Grid.Row>
        </Grid>
    );
}

export default Home;