import React, { Component } from "react";
import { Container } from 'semantic-ui-react';

// Apollo imports
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// css here
import 'semantic-ui-css/semantic.min.css';

// import navbar here


// import Components
import AppHeader from './components/Header/index';
import AppFooter from './components/Footer/index';

// import Pages
import Home from './pages/Home';


const client = new ApolloClient({
  uri: '/graphql',
  onError: (e) => { console.log(e) }
});


class App extends Component {
  render() {
    return (

      <ApolloProvider client={client}>
     
        <Container>

          
          <AppHeader/>
          <Home/>
          <AppFooter/>


        </Container>
        
      </ApolloProvider>
      
    );
  }
}

export default App;