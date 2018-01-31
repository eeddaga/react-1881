import React, { Component } from 'react';
import './AboutContainer.css';
import TemplateContainer from './TemplateContainer.js';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';




class AboutContainer extends Component {
  render(){
    return(
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          The initiative, co-chaired by Massachusetts Attorney General Maura Healey and Oregon Attorney General Ellen Rosenblum, sets the goal of electing women to 50 percent of the democratically held state attorney general seats by the end of 2022 and honors the history of women running for the office. The program aims to attract and support the most qualified and talented female candidates through trainings, events and serving as a resource for women considering running for the state office of attorney general.
        </p>
        <p>
          Lorem ipsum dolor amet you probably heard of them mlkshk echo park paleo, cold-pressed post-ironic tilde lyft etsy whatever. Poutine direct trade paleo, air plant intelligentsia messenger bag ramps fashion axe waistcoat hella pitchfork cloud bread occupy neutra pickled. Austin waistcoat bitters raclette asymmetrical prism next level, single-origin coffee thundercats biodiesel readymade forage selfies mlkshk. Tilde whatever 3 wolf moon wolf, neutra franzen lyft snackwave cred marfa copper mug. Iceland yr tousled, four loko pour-over wayfarers knausgaard next level man braid wolf kinfolk authentic fixie.
        </p>
        {/*TEMPORARY HOLDING AREA FOR POSTS TEMPLATE*/}
        <TemplateContainer />
      </div>
    )
  }
}








export default AboutContainer;
