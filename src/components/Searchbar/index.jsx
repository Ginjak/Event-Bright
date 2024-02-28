import "./searchbar.css";
import React, { useState } from "react";
import axios from "axios";
import Eventcard from "../Eventcard";

function Searchbar({ children }) {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [events, setEvents] = useState(null);
  const [searchExecuted, setSearchExecuted] = useState(false); // Initialize searchExecuted state

  const fetchEvents = async (startDate, endDate) => {
    const API_KEY = "HjQcNIEkdwsQswwBQhfE1PO0smAoxyu4";
    const apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json";

    try {
      const response = await axios.get(apiUrl, {
        params: {
          apikey: API_KEY,
          keyword: keyword,
          city: city,
          startDateTime: startDate,
          endDateTime: endDate,
          size: 10,
        },
      });

      setEvents(response.data);
      setSearchExecuted(true); // Set searchExecuted to true after search button is clicked
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatDateForAPI = (date) => {
    return date + "T12:00:00Z";
  };

  const handleSearch = () => {
    const formattedStartDate = formatDateForAPI(startDateTime);
    const formattedEndDate = formatDateForAPI(endDateTime);
    fetchEvents(formattedStartDate, formattedEndDate);
  };

  return (
    <>
      <h1>Events</h1>
      <div>
        <label>
          Keyword:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            value={startDateTime}
            onChange={(e) => setStartDateTime(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          End Date:
          <input
            type="date"
            value={endDateTime}
            onChange={(e) => setEndDateTime(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSearch}>Search</button>
      <Eventcard eventData={events} searchExecuted={searchExecuted} />
      {children}
    </>
  );
}

export default Searchbar;
