import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

import Header from './header/Header';

import Investors from './investors/Investors';
import Borrowers from './borrowers/Borrowers';
import About from './about/About';
import Footer from './footer/Footer'; 
import VideoGallery from './videoGallery/VideoGallery';

class App extends React.Component {
  render () {
    return (
      <Router>
        <ScrollToTop>
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

              <Route exact path="/howitworks">
                <VideoGallery />
              </Route>
          </Switch>
          
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
