import React from "react";
import Calendar from "./Calendar";
import EventsListView from "./EventsListView.js";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }
    //fetch data using API
    componentDidMount() {
      fetch("/api/events")
        .then(response => response.json())
        .then(data => {
          // console.log("------>",data);
          this.setState({ events: data });
        });
    }
    //Read data using console
    //Display data using list
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <a className="btn btn-outline-primary" href="/Events/add">ADD NEW EVENT</a>
          <div className="btn-group events-btn" role="group">
            <button className="btn btn-outline-primary active">Calender View</button>
            <button className="btn btn-outline-primary">Map View</button>
          </div>
        </div>
        <h3>List of Events</h3>
          <div className="row">
          <div className="col-md-6">
              <EventsListView events={this.state.events}/>
          </div>
          <div className="col-md-6">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
