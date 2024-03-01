import "./upcomingevents.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Upcomingevents = () => {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("sports"); // Default category is drama

  function removeDuplicates(arr) {
    const uniqueNames = new Set(); // Using a Set to store unique names

    return arr.filter((element) => {
      // Check if the name is unique
      if (!uniqueNames.has(element.name)) {
        uniqueNames.add(element.name); // Add the name to the set of unique names
        return true; // Keep this element in the filtered array
      }
      return false; // Discard this element from the filtered array
    });
  }

  function smallImage(images) {
    // Iterate through the images array
    for (const image of images) {
      // Check if the image has a "width" property greater than 1023
      if (
        image.hasOwnProperty("width") &&
        typeof image.width === "number" &&
        image.width > 400
      ) {
        return image.url; // Return the URL of the first image that meets the condition
      }
    }
    return null; // Return null if no image with width > 1023 is found
  }

  const arrWithUniqueEvents = removeDuplicates(events);
  console.log(arrWithUniqueEvents);

  useEffect(() => {
    async function fetchEvents(category) {
      const apiKey = "HjQcNIEkdwsQswwBQhfE1PO0smAoxyu4";
      const countryCode = "GB";
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&size=50&classificationName=${category}&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log(response.data._embedded.events); // Log the events array
        setEvents(response.data._embedded.events);
      } catch (error) {
        console.error("Error fetching upcoming shows:", error);
      }
    }

    fetchEvents(selectedCategory);
  }, [selectedCategory]); // Fetch events whenever selectedCategory changes

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="upcoming-events container-xxl my-5">
        <h2>Upcoming events</h2>
        <div className="buttons-wraper my-3">
          <button
            className="events-button"
            onClick={() => handleCategoryClick("comedy")}
          >
            Comedy
          </button>
          <button
            className="events-button"
            onClick={() => handleCategoryClick("music")}
          >
            Music
          </button>
          <button
            className="events-button"
            onClick={() => handleCategoryClick("sports")}
          >
            Sports
          </button>
          <button
            className="events-button"
            onClick={() => handleCategoryClick("family")}
          >
            Family
          </button>
          <button
            className="events-button"
            onClick={() => handleCategoryClick("film")}
          >
            Film
          </button>
          <button
            className="events-button"
            onClick={() => handleCategoryClick("theatre")}
          >
            Theatre
          </button>
        </div>
        {arrWithUniqueEvents.length > 0 ? (
          <div className="upcoming-events-wraper row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {arrWithUniqueEvents.slice(0, 12).map((event, index) => (
              <div className="col" key={event.id}>
                <div className="card bg-dark text-white h-100 position-relative">
                  <img
                    src={smallImage(event.images)}
                    className="card-img h-100"
                    alt={event.name}
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-between">
                    <h5 className="card-title text-center h-100 d-flex flex-column justify-content-center">
                      {event.name}
                    </h5>
                    <div className="info-wraper d-flex justify-content-between">
                      <div className="genre-location-wraper">
                        {event.classifications &&
                          event.classifications[0].subGenre.name !==
                            "Undefined" && (
                            <p className="card-text m-0">
                              {event.classifications[0].subGenre.name}
                            </p>
                          )}
                        {event._embedded.venues && (
                          <p className="card-text m-0">
                            {event._embedded.venues[0].city.name}
                          </p>
                        )}
                      </div>
                      <div className="date-price-wraper">
                        {event.dates && (
                          <p className="card-text m-0">
                            {event.dates.start.localDate}
                          </p>
                        )}
                        {event.priceRanges &&
                          event.priceRanges.length > 0 &&
                          event.priceRanges[0].min !== 0 && (
                            <div className=" d-flex">
                              <p className="card-text m-0 me-2">
                                {event.priceRanges[0].min}
                              </p>
                              <p className="card-text m-0">
                                {event.priceRanges[0].currency}
                              </p>
                            </div>
                          )}
                      </div>
                    </div>
                    {event.url && (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary card-btn"
                      >
                        Get tickets!
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No upcoming events</div>
        )}
      </div>
    </>
  );
};

export default Upcomingevents;
