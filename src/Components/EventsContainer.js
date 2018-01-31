import React, {Component} from 'react';
import './EventsContainer.css';

class EventsContainer extends Component {

  render (){
    return (
      <div className="events-container">
      <div className="events-container-text">
      <div className="events-content">
        <h1>Calendar of Events</h1>
        <h2>Lo-fi vexillologist wolf authentic sriracha, before they sold out cardigan kinfolk squid woke ethical banh mi cornhole cronut pop-up. Keytar irony squid chartreuse four dollar toast, beard normcore tacos letterpress four loko DIY sriracha. Fanny pack succulents organic enamel pin tattooed ennui.</h2>
        <h4>You probably heard of them squid keffiyeh tacos gluten-free heirloom hell of intelligentsia vaporware.</h4>
          <form>
            <label>Email:</label>
            <input type="text"/>
          </form>
        <button onClick={()=>{alert('this works')}}>Submit</button>
        </div>
      </div>
      </div>


    )
  }
}




export default EventsContainer;
