import React, {Component} from 'react';
import './NavContainer.css';
import EventsContainer from './EventsContainer.js';
import AboutContainer from './AboutContainer.js'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


class NavContainer extends Component {
  render (){
    return (
      <Router>
      <div className="navbar">
        <ul className="navitems">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/events">Get Involved</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        </ul>

        <Route path="/events" component={EventsContainer} />
        <Route path="/about" component={AboutContainer} />
      </div>
      </Router>

    )
  }
}


export default NavContainer;
