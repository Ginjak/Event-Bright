import "./upcomingevents.css";
import currencyFormatter from "currency-formatter";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Upcomingevents = () => {
  // useStates for events and selected category
  const [events, setEvents] = useState([]);
  // Default category is sports
  const [selectedCategory, setSelectedCategory] = useState("sports");

  // Function to remove duplicate events from generated array
  function removeDuplicates(arr) {
    // Using a Set to store unique names
    const uniqueNames = new Set();

    return arr.filter((element) => {
      // Check if the name is unique
      if (!uniqueNames.has(element.name)) {
        // Add the name to the set of unique names
        uniqueNames.add(element.name);
        // Keep this element in the filtered array
        return true;
      }
      // Discard this element from the filtered array
      return false;
    });
  }

  // Function to dislay currency symbol like £ when currency is GBP
  function currencyDisplay(amount, currencyCode) {
    const formattedAmount = currencyFormatter.format(amount, {
      code: currencyCode,
    });

    return formattedAmount;
  }

  // Function to loop through array and get url for the image in the array with a width property grater then 400
  function smallImage(images) {
    // Iterate through the images array
    for (const image of images) {
      // Check if the image has a "width" property greater than 400
      if (
        image.hasOwnProperty("width") &&
        typeof image.width === "number" &&
        image.width > 400
      ) {
        // Return the URL of the first image that meets the condition
        return image.url;
      }
    }
    // Return null if no image with width > 400 is found
    return null;
  }

  // Removing duplicate events from API data and storing it in a new viarible
  const arrWithUniqueEvents = removeDuplicates(events);

  // Fetching data from API, country is set to GB and category depending on selected button
  useEffect(() => {
    async function fetchEvents(category) {
      const apiKey = "HjQcNIEkdwsQswwBQhfE1PO0smAoxyu4";
      const countryCode = "GB";
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&size=50&classificationName=${category}&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        // Setting events to useState
        setEvents(response.data._embedded.events);
      } catch (error) {
        console.error("Error fetching upcoming shows:", error);
      }
    }
    // Running a function depeneding on which button is presses (sports, film etc.). Value stored in useState selectedCategory
    fetchEvents(selectedCategory);
  }, [selectedCategory]); // Fetch events whenever selectedCategory changes

  // Updating selectedCategory state to sports, music, film etc..
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  // Rendering UI with results
  return (
    <>
      <div className="upcoming-events container-xxl py-5 position-relative">
        <h2 className="text-white">Upcoming events</h2>
        <div className="buttons-wraper my-3">
          {/* useState updated on a button click */}
          <button
            className="events-button"
            onClick={() => handleCategoryClick("comedy")}
          >
            Comedy
          </button>
          {/* useState updated on a button click */}
          <button
            className="events-button"
            onClick={() => handleCategoryClick("music")}
          >
            Music
          </button>
          {/* useState updated on a button click */}
          <button
            className="events-button"
            onClick={() => handleCategoryClick("sports")}
          >
            Sports
          </button>
          {/* useState updated on a button click */}
          <button
            className="events-button"
            onClick={() => handleCategoryClick("family")}
          >
            Family
          </button>
          {/* useState updated on a button click */}
          <button
            className="events-button"
            onClick={() => handleCategoryClick("film")}
          >
            Film
          </button>
          {/* useState updated on a button click */}
          <button
            className="events-button"
            onClick={() => handleCategoryClick("theatre")}
          >
            Theatre
          </button>
        </div>
        {/* If aaray with unique events has more then 0 events it will generate a new card for every event. Will display maximum of 12 events */}
        {arrWithUniqueEvents.length > 0 ? (
          <div className="upcoming-events-wraper row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* Maping through array */}
            {arrWithUniqueEvents.slice(0, 12).map((event, index) => (
              // Creating a card with event details
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
                                From{" "}
                                {currencyDisplay(
                                  event.priceRanges[0].min,
                                  event.priceRanges[0].currency
                                )}
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
                        className="btn-tickets text-center card-btn"
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
          // IF events array is empty, message with No Upcoming events will come up, but shouldn't happen
          <div>No upcoming events</div>
        )}
      </div>
    </>
  );
};

export default Upcomingevents;
