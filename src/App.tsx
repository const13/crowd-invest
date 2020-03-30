import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Investors from './investors/Investors';
import Header from './header/Header'; 
import Footer from './footer/Footer'; 

class App extends React.Component {
  render () {
    return (
      <Router>
        <Header /> 

        <Switch>
            <Route exact path="/">
              <Investors />
            </Route>
        </Switch>
        
        <Footer />

      </Router>
  );
  }
}

export default App;
