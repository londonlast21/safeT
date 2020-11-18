import React, { Component } from "react";
import { Container } from 'semantic-ui-react';

// css here
import 'semantic-ui-css/semantic.min.css';

// import navbar here


// import Components
import AppHeader from './components/Header/index';
import AppFooter from './components/Footer/index';

// import Pages
import Home from './pages/Home';


class App extends Component {
  render() {
    return (
     
        <Container>

          
          <AppHeader/>
          <Home/>
          <AppFooter/>


        </Container>
      
    );
  }
}

export default App;