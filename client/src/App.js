import React, { Component } from "react";
import { Container } from 'semantic-ui-react';

// Apollo imports
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// css here
import 'semantic-ui-css/semantic.min.css';

// import navbar here
import Navbar from './components/navbar';

// import Components
import AppHeader from './components/Header/index';
import AppFooter from './components/Footer/index';

// import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import Signup from './pages/Signup';



const client = new ApolloClient({
  uri: '/graphql',
  onError: (e) => { console.log(e) }
});


class App extends Component {
  render() {
    return (

      <ApolloProvider client={client}>
        <Router>

        
          <Container>

          <Navbar />


            
            <Switch>

                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                {/* <Route exact path='/profile' component={Profile}/> */}
                <Route exact path="/post/:id" component={SinglePost}/>

                <Route component={NoMatch} />
            
            </Switch>
            
           



          </Container>
          <AppFooter/>

        </Router>
      </ApolloProvider>
      
    );
  }
}

export default App;