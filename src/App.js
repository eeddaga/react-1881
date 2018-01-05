import React, { Component } from 'react';
import NavContainer from './Components/NavContainer.js';
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

        </div>
      </div>
    );
  }
}

export default App;
