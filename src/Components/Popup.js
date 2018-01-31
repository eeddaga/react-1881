import React, {Component} from 'react';
import './Popup.css';


class Popup extends Component {
  constructor(props){
    super(props);
    this.state={
      text: 'hi'
    }
  }
  render(){
    return (
      <div className="pop">
        <h2>{this.props.text}</h2>
        <button onClick={this.props.closePopup}>Thank you, friend!</button>
      </div>
    )
  }
}







export default Popup;
