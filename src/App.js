import React, { Component } from 'react';
import NavContainer from './Components/NavContainer.js';
import EventsContainer from './Components/EventsContainer.js';
import AboutContainer from './Components/AboutContainer.js';
import ResourcesContainer from './Components/ResourcesContainer.js';
import DonateContainer from './Components/DonateContainer.js';
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



            <nav className="navbar">
              <li className="nav-item"><Link to="/about">About Us</Link></li>
              <li className="nav-item"><Link to="/resources">Resources</Link></li>
              <li className="nav-item"><Link to="/events">Get Involved</Link></li>
              <li className="nav-item"><Link to="/donate">Donate</Link></li>
            </nav>
            <img src="https://aaronopia.files.wordpress.com/2016/11/goddess-lady-justice-statue.jpg" className="App-logo" alt="logo" />

            {/*
              <div className="row">
              <div className="col-lg">
                <h1 className="App-title"><Link to="/">1881 Initiative</Link></h1>
              </div>

              <div className="col-lg">
                <h3>Committed to Lady AGs</h3>
              </div>
            </div>

            */}
            <div className="marquee">
            <h2>1881 Initiative</h2>
            </div>











        </header>



          <div className="content">

          <Route path="/about" component={AboutContainer} />
          <Route path="/resources" component={ResourcesContainer} />
          <Route path="/events" component={EventsContainer} />
          <Route path="/donate" component={DonateContainer} />
          </div>


          <footer>
          &copy; DAGA 2018
          </footer>


        </div>
      </div>
      </Router>

    );
  }
}

export default App;
