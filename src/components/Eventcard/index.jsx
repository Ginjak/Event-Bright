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
  console.log(events);
  return (
    <div>
      {/* Mapping through the events array to generate cards for each event */}
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <p>Name: {event.name}</p>
          <p>Show date: {event.dates.start.localDate}</p>
          <p>Show time: {event.dates.start.localTime}</p>
          <p>Genre: {event.classifications[0].genre.name}</p>
          <p>Genre: {event.classifications[0].segment.name}</p>
          <p>Sales start date: {event.sales.public.startDateTime}</p>
          <p>Sales end date: {event.sales.public.endDateTime}</p>
          <p>Link to purchase tickets: {event.url}</p>
          <p>Venue name: {event._embedded.venues[0].name}</p>
          <p>Venue City: {event._embedded.venues[0].city.name}</p>
          <p>
            Venue Address (Street name):{" "}
            {event._embedded.venues[0].address.line1}
          </p>
          <p>
            Venue Address (Postcode): {event._embedded.venues[0].postalCode}
          </p>
          {/* <p>Price range (from): {event.priceRanges[1].min}</p>
          <p>Price range (to): {event.priceRanges[1].max}</p>
          <p>Price currency: {event.priceRanges[1].currency}</p> */}

          <p>
            Legal age:{" "}
            {event.ageRestrictions.legalAgeEnforced ? (
              <img
                src="../../public/eventBright-logo.png"
                alt="Only for adults"
              />
            ) : (
              <img
                className="age-restriction"
                src="./eventBright-logo.png"
                alt="OK for kids"
              />
            )}
          </p>
          <img src={event.images[0].url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Eventcard;
