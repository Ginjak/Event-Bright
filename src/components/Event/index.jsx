import React, { useState } from "react";
import "./event.css";
import currencyFormatter from "currency-formatter";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Weather from "../Weather";

function Event({ eventData, searchExecuted }) {
  // State to track the currently expanded card's ID otherwise all opens at once
  const [expandedId, setExpandedId] = useState(null);

  // Adding currency symbol
  function currencyDisplay(amount, currencyCode) {
    const formattedAmount = currencyFormatter.format(amount, {
      code: currencyCode,
    });

    return formattedAmount;
  }
  // Handle card expand
  const handleExpandClick = (id) => {
    // Toggle expanded state
    setExpandedId(expandedId === id ? null : id);
  };

  // If search executed, but no information returned, display message with "Sorry... there are no events available"
  if (
    searchExecuted &&
    (!eventData ||
      !eventData._embedded ||
      !eventData._embedded.events ||
      eventData._embedded.events.length === 0)
  ) {
    return (
      <>
        {" "}
        <div className="container-xxl pt-5">
          <div className="no-events d-flex justify-content-center align-items-center">
            <p>Sorry... there are no events available</p>
          </div>
          ;
        </div>
        ;
      </>
    );
  }

  // Checks if data exits and if not, return empty array
  const events =
    eventData && eventData._embedded ? eventData._embedded.events : [];

  // Function to check for a large image from API with more then 1023px width and extract url for that image
  function largeImage(images) {
    for (const image of images) {
      if (
        image.hasOwnProperty("width") &&
        typeof image.width === "number" &&
        image.width > 1023
      ) {
        return image.url;
      }
    }
    return null;
  }

  // Display cards API data
  return (
    <>
      <div className="container-xxl py-5 position-relative">
        <h2 className="text-white mb-3">Events</h2>
        {/* Loops through array and creates a card for each */}
        {events.map((event, index) => (
          // Using MUI react component library together with Bootstrap 5
          // DATA from Ticketmaster API is displayed
          <Card key={index} sx={{ maxWidth: "100%", marginBottom: "30px" }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: red[500],
                    width: 75,
                    height: 75,
                  }}
                  aria-label="event"
                >
                  <div className="d-flex flex-column align-items-center">
                    {event.dates.start.localDate && (
                      <p className="avatar-text mb-1 text-uppercase">
                        {new Date(event.dates.start.localDate).toLocaleString(
                          "default",
                          { month: "short" }
                        )}
                      </p>
                    )}
                    {event.dates.start.localDate && (
                      <p className="avatar-text m-0">
                        {new Date(event.dates.start.localDate)
                          .getDate()
                          .toString()
                          .padStart(2, "0")}
                      </p>
                    )}
                  </div>
                </Avatar>
              }
              title={
                <div className="mui-header-content text-dark-blue">
                  {event.name && (
                    <h5 className="mui-header-title"> {event.name}</h5>
                  )}
                  <div className="venue-dates-wraper d-flex flex-column flex-md-row justify-content-between">
                    <div className="city-venue-wraper d-flex">
                      {event._embedded?.venues[0]?.city?.name && (
                        <p className="venue-city mb-0 fw-bolder me-2">
                          {event?._embedded?.venues[0]?.city?.name}
                        </p>
                      )}
                      {event?._embedded?.venues[0]?.name && (
                        <p className="venue-name mb-0 fw-bolder ">
                          {event?._embedded?.venues[0]?.name}
                        </p>
                      )}
                    </div>
                    <div className="date-time-wraper d-flex me-5">
                      {event.dates.start.localDate && (
                        <p className="weekday  me-2">
                          {new Date(event.dates.start.localDate).toLocaleString(
                            "en-US",
                            { weekday: "short" }
                          )}
                        </p>
                      )}
                      {event.dates.start.localTime && (
                        <p>
                          {event.dates.start.localTime
                            .split(":")
                            .slice(0, 2)
                            .join(":")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              }
            />
            <CardActions
              disableSpacing
              sx={{
                marginTop: "-56px",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                aria-label="show more"
                onClick={() => handleExpandClick(index)}
                sx={{
                  transform: expandedId === index ? "rotate(180deg)" : "none",
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            {/* Card expanded part with more API Data */}
            {/* Data is displayed depending if it is avaible from API. If not avaible element won't get generated */}
            <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
              <CardContent>
                <div className="row">
                  <div className="col-md-4">
                    <CardMedia
                      component="img"
                      height="194"
                      image={largeImage(event.images)}
                      alt={event.name}
                    />
                  </div>
                  <div className="py-4 py-md-0 col-md-8 d-flex flex-column justify-content-between">
                    <div className="bio-venue-wraper d-flex flex-column flex-md-row justify-content-between h-100 pb-3">
                      <div className="show-bio-wraper d-flex flex-column justify-content-between">
                        <div className="show-date-time d-flex">
                          {event.dates.start.localDate && (
                            <p className="show-date mb-0 me-3 text-dark-blue fw-bolder">
                              {" "}
                              {event.dates.start.localDate}
                            </p>
                          )}
                          {event.dates.start.localTime && (
                            <p className="show-time mb-0 text-dark-blue fw-bolder">
                              {event.dates.start.localTime
                                .split(":")
                                .slice(0, 2)
                                .join(":")}
                            </p>
                          )}
                        </div>
                        <div className="mt-2 mt-md-0 event-type d-flex">
                          {event.classifications &&
                            event?.classifications[0]?.genre?.name !==
                              "Undefined" && (
                              <p className="show-genre mb-0 btn-event me-2">
                                {event?.classifications[0]?.genre?.name}
                              </p>
                            )}
                          {event.classifications &&
                            event.classifications.length > 0 && (
                              <p className="show-segment mb-0 btn-event me-2">
                                {event.classifications[0].segment.name}
                              </p>
                            )}
                        </div>
                      </div>
                      <div className="mt-4 mt-md-0 venue-details-wraper text-dark-blue ">
                        {event?._embedded?.venues[0]?.name && (
                          <p className="text-md-end mb-0">
                            {event?._embedded?.venues[0]?.name}
                          </p>
                        )}
                        {event?._embedded?.venues[0]?.address && (
                          <p className="text-md-end mb-0">
                            {event?._embedded?.venues[0]?.address?.line1}
                          </p>
                        )}
                        {event?._embedded?.venues[0]?.address?.line2 && (
                          <p className="text-md-end mb-0">
                            {event?._embedded?.venues[0]?.address?.line2}
                          </p>
                        )}
                        {event?._embedded?.venues[0]?.postalCode && (
                          <p className="text-md-end mb-0">
                            {event?._embedded?.venues[0]?.postalCode}
                          </p>
                        )}
                        {event?._embedded?.venues[0]?.city?.name && (
                          <p className="text-md-end mb-0">
                            {event?._embedded?.venues[0]?.city?.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="price-purchase-wraper d-flex flex-column flex-md-row justify-content-between justify-content-md-end">
                      <div className="price-wraper d-flex mb-4 mb-md-0 me-4">
                        {event.priceRanges && (
                          <p className="price-from m-0 me-2 text-dark-blue ">
                            From{" "}
                            <span className="fw-bold ms-1 ">
                              {/* Calling function with Currency and amout to display currecny symbol before amaunt */}
                              {currencyDisplay(
                                event.priceRanges[0].min,
                                event.priceRanges[0].currency
                              )}
                            </span>
                          </p>
                        )}
                        {event.priceRanges && (
                          <p className="m-0 price-to text-dark-blue">
                            To{" "}
                            <span className="fw-bold ms-1">
                              {/* Calling function with Currency and amout to display currecny symbol before amaunt */}
                              {currencyDisplay(
                                event.priceRanges[0].max,
                                event.priceRanges[0].currency
                              )}
                            </span>
                          </p>
                        )}
                      </div>
                      {event.url && (
                        <a
                          href={event.url}
                          target="_blank"
                          className="btn-tickets text-center"
                        >
                          Get Tickets!
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <Typography paragraph sx={{ marginTop: "20px" }}>
                  {event.pleaseNote && (
                    <>
                      <span className="event-note-text">
                        <i className="fa-solid fa-circle-exclamation me-2"></i>
                        {event.pleaseNote}
                      </span>
                    </>
                  )}
                </Typography>
                {/* Adding Weather component that takes a prop as City from Ticket master API and generates data with weather information and some animations*/}
                <Weather city={event?._embedded?.venues[0]?.city?.name} />
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Event;
