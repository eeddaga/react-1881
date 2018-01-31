import React, {Component} from 'react';
import './ResourcesContainer.css';
import LiveMap from './LiveMap.js';

class ResourcesContainer extends Component {
  render(){
    return (
      <div className="resources-container">
        <div className="resources-container-text">
          <h1>Resources for running for AG</h1>
          <p>Godard banh mi copper mug lomo humblebrag. Prism slow-carb cliche, pork belly bicycle rights vaporware affogato fingerstache blog irony distillery. </p>
        </div>

        <LiveMap />
      </div>


    )
  }
}





export default ResourcesContainer;
