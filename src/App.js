import React, { Component } from 'react';
import NavContainer from './Components/NavContainer.js';
import EventsContainer from './Components/EventsContainer.js';
import AboutContainer from './Components/AboutContainer.js';
import ResourcesContainer from './Components/ResourcesContainer.js';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">

        <header className="App-header">
          <img src="https://aaronopia.files.wordpress.com/2016/11/goddess-lady-justice-statue.jpg" className="App-logo" alt="logo" />



          <div className="navbar">
            <ul className="navitems">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/events">Get Involved</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            </ul>


          </div>

            <div className="row">
            <div className="col-md">
              <h1 className="App-title"><Link to="/">1881 Initiative</Link></h1>
            </div>

            <div className="col-md">
              <h3>Committed to Lady AGs</h3>
            </div>


          </div>

        </header>

        <body>
          <div className="content">
          <Route path="/about" component={AboutContainer} />
          <Route path="/resources" component={ResourcesContainer} />
          <Route path="/events" component={EventsContainer} />
          </div>
        </body>

        </div>
      </div>
      </Router>

    );
  }
}

export default App;
