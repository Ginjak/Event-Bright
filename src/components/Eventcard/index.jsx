import "./eventcard.css";
import React from "react";

function Eventcard({ eventData, searchExecuted }) {
  // Checking if search has been executed and eventData is undefined or if _embedded or events do not exist
  if (
    searchExecuted &&
    (!eventData ||
      !eventData._embedded ||
      !eventData._embedded.events ||
      eventData._embedded.events.length === 0)
  ) {
    return <div className="test">No events available</div>;
  }

  // Accessing the events array from _embedded
  const events =
    eventData && eventData._embedded ? eventData._embedded.events : [];

  return (
    <div>
      {/* Mapping through the events array to generate cards for each event */}
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <p>
            Event {index + 1}: {event.name}
          </p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
}

export default Eventcard;
