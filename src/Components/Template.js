import React, {Component} from 'react';
import grapesjs from 'grapesjs';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';




class Template extends Component {
  componentDidMount(){
    this.el = this.el;

    grapesjs.init({
      container: '#gjs',
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color:red}',
    });



  }

  componentWillUnmount(){
    this.el.Template('destroy');
  }

  render(

  ){
    return(
      <div>
        <div className="grapes" ref={el => this.el = el}>
          {this.props.template}

        </div>
      </div>
    )
  }
}











export default Template;
