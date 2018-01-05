import React, {Component} from 'react';
import './NavContainer.css';


class NavContainer extends Component {
  render (){
    return (
      <div className="navbar">
        <ul className="navitems">
        <li>About Us</li>
        <li>Resources</li>
        <li>Get Involved</li>
        <li>Donate</li>
        </ul>
      </div>

    )
  }
}


export default NavContainer;
