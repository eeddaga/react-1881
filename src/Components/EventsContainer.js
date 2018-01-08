import React, {Component} from 'react';
import './EventsContainer.css';

class EventsContainer extends Component {
  render (){
    return (
      <div className="events-container">
      <h1>Calendar of Events</h1>


      <form>
        <label>Email:</label>
        <input type="text"/>
      </form>
      </div>


    )
  }
}




export default EventsContainer;
