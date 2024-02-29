import "./hero.css";
import React from "react";

// import DatePicker from "react-bootstrap-date-picker";

const Hero = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid py-5 ps-0">
        <div id="background-overlay" className="container-fluid ms-0">
          <div className="container-fluid">
            <h1 className="display-4 text-white">EventBright</h1>
            <p className="lead text-white mb-5">
              What's on, where, and how the weather is there!
            </p>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="keyword" className="form-label">
                  Keyword
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputKeyword"
                  placeholder="Search for a band, city or venue"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="City"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputStartDate" className="form-label">
                  Start Date
                </label>
                <select
                  id="inputStartDate"
                  className="form-select"
                  defaultValue=""
                >
                  <option>Select a start date...</option>
                  {/* Add options here */}
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputEndDate" className="form-label">
                  End Date
                </label>
                <select
                  id="inputEndDate"
                  className="form-select"
                  defaultValue=""
                >
                  <option>Select an end date...</option>
                  {/* Add options here */}
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputResultsNum" className="form-label">
                  Number of Results
                </label>
                <select
                  id="inputResultsNum"
                  className="form-select"
                  defaultValue=""
                >
                  <option>Select the number of events to see...</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="40">40</option>
                </select>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary float-end my-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
