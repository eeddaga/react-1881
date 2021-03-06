import React, { Component } from 'react';
// import NavContainer from './Components/NavContainer.js';
import EventsContainer from './Components/EventsContainer.js';
import AboutContainer from './Components/AboutContainer.js';
import ResourcesContainer from './Components/ResourcesContainer.js';
import DonateContainer from './Components/DonateContainer.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <MuiThemeProvider>
      <div className="App">
        <div className="container">

        {/*HEADER WITH NAVIGATION AND IMAGE*/}
        <header className="App-header">

            <div className="marquee">
              <h2><Link to="/">the 1881 Initiative</Link></h2>
            </div>

            <nav className="navbar">
              <li className="nav-item"><Link to="/about">About Us</Link></li>
              <li className="nav-item"><Link to="/resources">Resources</Link></li>
              <li className="nav-item"><Link to="/events">Get Involved</Link></li>
              {/*  <li className="nav-item"><Link to="/donate">Donate</Link></li> */}
            </nav>
          {/*  <img src="https://aaronopia.files.wordpress.com/2016/11/goddess-lady-justice-statue.jpg" className="App-logo" alt="logo" /> */}
          <div className="right-side">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
              <button type="button"><a href="https://secure.actblue.com/" target="_blank" rel="noopener noreferrer">DONATE</a></button>
          </div>


        </header>




          <div className="content">

            <div className="text-area">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutContainer} />
                <Route path="/resources" component={ResourcesContainer} />
                <Route path="/events" component={EventsContainer} />
                <Route path="/donate" component={DonateContainer} />
              </Switch>


            </div>
          </div>






        </div>
      </div>
      </MuiThemeProvider>
      </Router>

    );
  }
}

export default App;
