import "./searchbar.css";
import React, { useState } from "react";
import axios from "axios";
import Eventcard from "../Eventcard";

function Searchbar() {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [numResults, setNumResults] = useState(10);
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
          size: numResults,
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
      <div className="jumbotron jumbotron-fluid py-5 ps-0">
        <div id="background-overlay" class="container-fluid ms-0">
          <div class="container-fluid">
            <h1 class="display-4 text-white">EventBright</h1>
            <p class="lead text-white mb-5">
              What's on, where, and how the weather is there!
            </p>
            <div class="row g-3">
              <div class="col-md-6">
                <label for="keyword" class="form-label">
                  Keyword
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="keyword"
                  placeholder="Search for a band, city or venue"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <div class="col-md-6">
                <label for="city" class="form-label">
                  City
                </label>
                <input
                  class="form-control"
                  id="city"
                  placeholder="City"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div class="col-md-4">
                <label for="inputStartDate" class="form-label">
                  Start Date
                </label>
                <input
                  id="inputStartDate"
                  class="form-control"
                  type="date"
                  value={startDateTime}
                  onChange={(e) => setStartDateTime(e.target.value)}
                />
              </div>
              <div class="col-md-4">
                <label for="inputEndDate" class="form-label">
                  End Date
                </label>
                <input
                  id="inputEndDate"
                  class="form-control"
                  type="date"
                  value={endDateTime}
                  onChange={(e) => setEndDateTime(e.target.value)}
                />
              </div>
              <div class="col-md-4">
                <label for="inputResultsNum" class="form-label">
                  Number of Results
                </label>
                <select
                  id="inputResultsNum"
                  class="form-select"
                  value={numResults}
                  onChange={(e) => setNumResults(e.target.value)}
                >
                  <option selected>
                    Select the number of events to see...
                  </option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="40">40</option>
                </select>
              </div>
              <div class="col-12">
                <button
                  class="btn btn-primary float-end my-2"
                  onClick={handleSearch}
                >
                  Search
                </button>
                <Eventcard eventData={events} searchExecuted={searchExecuted} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <label>
          Keyword:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
      </div> */}
      {/* <div>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
      </div> */}
      {/* <div>
        <label>
          Start Date:
          <input
            type="date"
            value={startDateTime}
            onChange={(e) => setStartDateTime(e.target.value)}
          />
        </label>
      </div> */}
      {/* <div>
        <label>
          End Date:
          <input
            type="date"
            value={endDateTime}
            onChange={(e) => setEndDateTime(e.target.value)}
          />
        </label>
      </div> */}
      {/* <button onClick={handleSearch}>Search</button>
      <Eventcard eventData={events} searchExecuted={searchExecuted} /> */}
    </>
  );
}

export default Searchbar;
