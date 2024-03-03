import "./home.css";
import React, { useState } from "react";
import axios from "axios";
import Event from "../../components/Event";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Upcomingevents from "../../components/Upcomingevents";

function Home() {
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
  const [showCityError, setShowCityError] = useState(false);

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
      // setShowCityError(false); // Error message if City field is empty
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    // if (city.trim() === "" && keyword.trim() !== "") {
    //   // If city input is empty error message will change to true
    //   setShowCityError(true);
    // } else {
    const formattedStartDate = formatDateForAPIStart(startDateTime);
    const formattedEndDate = formatDateForAPIEnd(endDateTime);
    console.log("Formatted Start Date:", formattedStartDate);
    console.log("Formatted End Date:", formattedEndDate);
    fetchEvents(formattedStartDate, formattedEndDate);
    // }
  };

  return (
    <>
      <section className="hero-section">
        <div id="jumbotron" className="jumbotron jumbotron-fluid py-5 ps-0">
          <div id="background-overlay" className="container-fluid py-5 ms-0">
            <div className="container-xxl">
              <h1 className="display-4 text-white">EventBright</h1>
              <p className="lead text-white mb-5">
                What's on, where, and how the weather is there!
              </p>
              <div className="row gx-0 gy-3">
                <div className="col-md-2">
                  <label className="form-label">Select Dates</label>
                  <div>
                    <DatePicker
                      id="inputStartDate"
                      className="form-control date-input-left"
                      selected={startDateTime ? new Date(startDateTime) : null}
                      onChange={(date) => setStartDateTime(date)}
                    />
                  </div>
                </div>
                <div className="col-md-2 d-flex flex-column justify-content-end">
                  <div>
                    <DatePicker
                      id="inputEndDate"
                      className="form-control date-input-right"
                      selected={endDateTime ? new Date(endDateTime) : null}
                      onChange={(date) => setEndDateTime(date)}
                    />
                  </div>
                </div>
                <label className="form-label d-lg-none d-block">Options</label>
                <div className="col-md-5 col-lg-4 ps-lg-3 d-flex flex-column justify-content-end">
                  <input
                    type="text"
                    className="form-control"
                    id="keyword"
                    placeholder="Search for entertainment"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-lg-2 ps-md-3 d-flex flex-column justify-content-end">
                  <input
                    className="form-control"
                    id="city"
                    placeholder="City"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="col-md-1 col-lg-1 ps-md-3 d-flex flex-column justify-content-end">
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
                <div className="col-md-2 col-lg-1 d-flex flex-column justify-content-end ">
                  <button className="search-btn m-0" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
              {showCityError && <p className="text-danger">Enter city name</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="events-section">
        {searchExecuted && events ? (
          <Event eventData={events} searchExecuted={searchExecuted} />
        ) : (
          <Upcomingevents />
        )}
      </section>
    </>
  );
}

export default Home;
