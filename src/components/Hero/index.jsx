import "./hero.css";
import React from "react";

// import DatePicker from "react-bootstrap-date-picker";

const Hero = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid py-5 ps-0">
        <div id="background-overlay" class="container-fluid ms-0">
          <div class="container-fluid">
            <h1 class="display-4 text-white">EventBright</h1>
            <p class="lead text-white mb-5">
              What's on, where, and how the weather is there!
            </p>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="keyword" class="form-label">
                  Keyword
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputKeyword"
                  placeholder="Search for a band, city or venue"
                />
              </div>
              <div class="col-md-6">
                <label for="city" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  placeholder="City"
                />
              </div>
              <div class="col-md-4">
                <label for="inputStartDate" class="form-label">
                  Start Date
                </label>
                <select id="inputStartDate" class="form-select">
                  <option selected>Select an start date...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputEndDate" class="form-label">
                  End Date
                </label>
                <select id="inputEndDate" class="form-select">
                  <option selected>Select an end date...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputResultsNum" class="form-label">
                  Number of Results
                </label>
                <select id="inputResultsNum" class="form-select">
                  <option selected>
                    Select the number of events to see...
                  </option>
                  <option value="1">5</option>
                  <option value="2">10</option>
                  <option value="3">15</option>
                  <option value="3">20</option>
                  <option value="3">40</option>
                </select>
              </div>


              {/* <div class="input-group date" data-provide="datepicker">
                <input type="date" class="form-control" />
                <div class="input-group-addon">
                  <span class="glyphicon glyphicon-th"></span>
                </div>
              </div> */}

              <div class="col-12">
                <button type="submit" class="btn btn-primary float-end my-2">
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
