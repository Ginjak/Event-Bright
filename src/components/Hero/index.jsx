import "./hero.css";
import React, { useState } from "react";
import axios from "axios";
import Event from "../Event";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Hero() {
  const formatDateForAPIStart = (date) => {
    // Convert date to isoString
    const isoString = new Date(date).toISOString();
    // Return date with correct format for ticketmaster API
    return isoString.slice(0, -5) + "Z";
  };

  const formatDateForAPIEnd = (date) => {
    // Create a new Date object
    const endDate = new Date(date);
    // Add one day to the date
    endDate.setDate(endDate.getDate() + 1);
    // Convert adjusted date to ISO 8601 format
    const adjustedEndDate = endDate.toISOString();
    // Return date with correct format for ticketmaster API
    return adjustedEndDate.slice(0, -5) + "Z";
  };

  const todaysDate = new Date();
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [startDateTime, setStartDateTime] = useState(
    formatDateForAPIStart(todaysDate)
  );
  const [endDateTime, setEndDateTime] = useState(
    formatDateForAPIEnd(todaysDate)
  );
  const [numResults, setNumResults] = useState(5);
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
      console.log(response.data);
      setSearchExecuted(true); // Set searchExecuted to true after search button is clicked
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const formattedStartDate = formatDateForAPIStart(startDateTime);

    const formattedEndDate = formatDateForAPIEnd(endDateTime);
    console.log("Formatted Start Date:", formattedStartDate);
    console.log("Formatted End Date:", formattedEndDate);
    fetchEvents(formattedStartDate, formattedEndDate);
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid py-5 ps-0">
        <div id="background-overlay" className="container-fluid ms-0">
          <div className="container-fluid">
            <h1 className="display-4 text-white">EventBright</h1>
            <p className="lead text-white mb-5">
              What's on, where, and how the weather is there!
            </p>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="keyword" className="form-label">
                  Keyword
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="keyword"
                  placeholder="Search for a band, city or venue"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  className="form-control"
                  id="city"
                  placeholder="City"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputStartDate" className="form-label">
                  Start Date
                </label>
                <div>
                  <DatePicker
                    id="inputStartDate"
                    className="form-control"
                    selected={startDateTime ? new Date(startDateTime) : null}
                    onChange={(date) => setStartDateTime(date)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputEndDate" className="form-label">
                  End Date
                </label>
                <div>
                  <DatePicker
                    id="inputEndDate"
                    className="form-control"
                    selected={endDateTime ? new Date(endDateTime) : null}
                    onChange={(date) => setEndDateTime(date)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputResultsNum" className="form-label">
                  Number of Results
                </label>
                <select
                  id="inputResultsNum"
                  className="form-select"
                  value={numResults}
                  onChange={(e) => setNumResults(e.target.value)}
                >
                  <option disabled>
                    Select the number of events to see...
                  </option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="40">40</option>
                </select>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary float-end my-2"
                  onClick={handleSearch}
                >
                  Search
                </button>
                {searchExecuted && events && (
                  <Event eventData={events} searchExecuted={searchExecuted} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
