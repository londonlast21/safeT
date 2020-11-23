import React from "react";
import { Container } from 'semantic-ui-react';

// Apollo imports
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// css here
import 'semantic-ui-css/semantic.min.css';
import './App.css';

// import navbar here
import Navbar from './components/navbar';

// import Components


// import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SinglePost from './pages/SinglePost';
import Signup from './pages/Signup';



const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql',
  onError: (e) => { console.log(e) }
});


function App () {
    return (

      <ApolloProvider client={client}>
        <Router>

        
          <Container>

          <Navbar />


            
            <Switch>

                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path="/post/:id" component={SinglePost}/>

                <Route component={NoMatch} />
            
            </Switch>
            
           



          </Container>
          

        </Router>
        
      </ApolloProvider>
      
      
    );
}


export default App;