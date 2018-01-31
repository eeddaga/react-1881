import React, {Component} from 'react';
import grapesjs from 'grapesjs';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';




class TemplateContainer extends Component {
  componentDidMount(){
    this.el = this.el;
    
      grapesjs.init({
        container: '#gjs',
        components: '<div class="txt-red">Hello world!</div>',
        style: '.txt-red{color:red}',
      });







  }

  componentWillUnmount(){
    this.el.TemplateContainer('destroy');
  }

  render(){
    return(
      <div>
        <div className="grapesjs" ref={el => this.el = el}></div>
      </div>
    )
  }
}











export default TemplateContainer;
