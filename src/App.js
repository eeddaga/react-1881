import React, { Component } from 'react';
import NavContainer from './NavContainer.js';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <header className="App-header">
          <img src="https://aaronopia.files.wordpress.com/2016/11/goddess-lady-justice-statue.jpg" className="App-logo" alt="logo" />
          <div className="row">

            <div className="col-md">
              <h1 className="App-title">1881 Initiative</h1>
            </div>

            <div className="col-md">
              <h3>Committed to Lady AGs</h3>
            </div>

            <div className="col-md">
            <NavContainer />
            </div>

          </div>

        </header>
        <p className="App-intro">
          The initiative, co-chaired by Massachusetts Attorney General Maura Healey and Oregon Attorney General Ellen Rosenblum, sets the goal of electing women to 50 percent of the democratically held state attorney general seats by the end of 2022 and honors the history of women running for the office. The program aims to attract and support the most qualified and talented female candidates through trainings, events and serving as a resource for women considering running for the state office of attorney general.
        </p>
        </div>
      </div>
    );
  }
}

export default App;
