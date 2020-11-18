import React from 'react';
import PostList from '../components/PostList';

import { Grid } from 'semantic-ui-react';

const Home = ({}) => {



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