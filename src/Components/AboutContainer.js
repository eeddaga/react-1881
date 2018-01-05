import React, { Component } from 'react';
import './AboutContainer.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class AboutContainer extends Component {
  render(){
    return(
      <p>
        The initiative, co-chaired by Massachusetts Attorney General Maura Healey and Oregon Attorney General Ellen Rosenblum, sets the goal of electing women to 50 percent of the democratically held state attorney general seats by the end of 2022 and honors the history of women running for the office. The program aims to attract and support the most qualified and talented female candidates through trainings, events and serving as a resource for women considering running for the state office of attorney general.
      </p>
    )
  }
}








export default AboutContainer;
