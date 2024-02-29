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

  // Function to check if array has a width property with a value of 1024 or more

  function largeImage(images) {
    // Iterate through the images array
    for (const image of images) {
      // Check if the image has a "width" property greater than 1023
      if (
        image.hasOwnProperty("width") &&
        typeof image.width === "number" &&
        image.width > 1023
      ) {
        return image.url; // Return the URL of the first image that meets the condition
      }
    }
    return null; // Return null if no image with width > 1023 is found
  }

  return (
    <div>
      {/* Mapping through the events array to generate cards for each event  */}
      {events.map((event, index) => (
        <div key={index} className="event-card">
          {event.name && <p>Name: {event.name}</p>}

          {event.dates.start.localDate && (
            <p>Show date: {event.dates.start.localDate}</p>
          )}

          {event.dates.start.localTime && (
            <p>Show time: {event.dates.start.localTime}</p>
          )}
          {event.classifications &&
            event.classifications[0].genre.name !== "Undefined" && (
              <p>Genre: {event.classifications[0].genre.name}</p>
            )}
          {event.classifications[0].segment.name && (
            <p>Segment/event type: {event.classifications[0].segment.name}</p>
          )}
          {event.sales.public.startDateTime && (
            <p>Sales start date: {event.sales.public.startDateTime}</p>
          )}
          {event.sales.public.endDateTime && (
            <p>Sales end date: {event.sales.public.endDateTime}</p>
          )}
          {event.url && <p>Link to purchase tickets: {event.url}</p>}
          {event._embedded.venues[0].name && (
            <p>Venue name: {event._embedded.venues[0].name}</p>
          )}
          {event._embedded.venues[0].city.name && (
            <p>Venue City: {event._embedded.venues[0].city.name}</p>
          )}
          {event._embedded.venues[0].address.line1 && (
            <p>
              Venue Address (Street name):{" "}
              {event._embedded.venues[0].address.line1}
            </p>
          )}
          {event._embedded.venues[0].postalCode && (
            <p>
              Venue Address (Postcode): {event._embedded.venues[0].postalCode}
            </p>
          )}
          {event.priceRanges && (
            <p>Price range (from): {event.priceRanges[1].min}</p>
          )}
          {event.priceRanges && (
            <p>Price range (to): {event.priceRanges[1].max}</p>
          )}
          {event.priceRanges && (
            <p>Price currency: {event.priceRanges[1].currency}</p>
          )}
          {event.ageRestrictions && (
            <div>
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
            </div>
          )}
          {event.pleaseNote && <p>Important note: {event.pleaseNote}</p>}
          {event.info && <p>Ticket purchase information: {event.info}</p>}
          {event.images && <img src={largeImage(event.images)} alt="" />}
        </div>
      ))}
    </div>
  );
}

export default Eventcard;
