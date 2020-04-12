import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Investors from './investors/Investors';
import Borrowers from './borrowers/Borrowers';
import About from './about/About';
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
            <Route exact path="/credits">
              <Borrowers />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
        </Switch>
        
        <Footer />

      </Router>
  );
  }
}

export default App;
