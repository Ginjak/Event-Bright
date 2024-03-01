import React, { useState } from "react";
import "./eventcard.css";
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

function Eventcard({ eventData, searchExecuted }) {
  const [expandedId, setExpandedId] = useState(null); // State to track the currently expanded card's ID

  // Adding currency symbol
  function currencyDisplay(amount, currencyCode) {
    const formattedAmount = currencyFormatter.format(amount, {
      code: currencyCode,
    });

    return formattedAmount;
  }

  const handleExpandClick = (id) => {
    setExpandedId(expandedId === id ? null : id); // Toggle expanded state
  };

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
        <div className="container-xxl">
          <div className="no-events d-flex justify-content-center align-items-center">
            <p>Sorry... there are no events available</p>
          </div>
          ;
        </div>
        ;
      </>
    );
  }

  const events =
    eventData && eventData._embedded ? eventData._embedded.events : [];

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

  return (
    <div className="container-xxl">
      {events.map((event, index) => (
        <Card key={index} sx={{ maxWidth: "100%", margin: "30px 0px" }}>
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
              <div className="mui-header-content">
                {event.name && (
                  <h5 className="mui-header-title"> {event.name}</h5>
                )}
                <div className="venue-dates-wraper d-flex flex-column flex-md-row justify-content-between">
                  <div className="city-venue-wraper d-flex">
                    {event._embedded.venues[0].city.name && (
                      <p className="venue-city mb-0 fw-bolder me-2">
                        {event._embedded.venues[0].city.name}
                      </p>
                    )}
                    {event._embedded.venues[0].name && (
                      <p className="venue-name mb-0 fw-bolder ">
                        {event._embedded.venues[0].name}
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
          <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="row">
                <div className="col-4">
                  <CardMedia
                    component="img"
                    height="194"
                    image={largeImage(event.images)}
                    alt={event.name}
                  />
                </div>
                <div className="col-8 d-flex flex-column justify-content-between">
                  <div className="bio-venue-wraper d-flex justify-content-between h-100 pb-3">
                    <div className="show-bio-wraper d-flex flex-column justify-content-between">
                      <div className="show-date-time d-flex">
                        {event.dates.start.localDate && (
                          <p className="show-date mb-0 me-3">
                            {" "}
                            {event.dates.start.localDate}
                          </p>
                        )}
                        {event.dates.start.localTime && (
                          <p className="show-time mb-0">
                            {event.dates.start.localTime
                              .split(":")
                              .slice(0, 2)
                              .join(":")}
                          </p>
                        )}
                      </div>
                      <div className="event-type d-flex">
                        {event.classifications &&
                          event.classifications[0].genre.name !==
                            "Undefined" && (
                            <p className="show-genre mb-0 btn-event me-2">
                              {event.classifications[0].genre.name}
                            </p>
                          )}
                        {event.classifications &&
                          event.classifications.length > 0 && (
                            <p className="show-segment mb-0 btn-event me-2">
                              {event.classifications[0].segment.name}
                            </p>
                          )}
                        {event.ageRestrictions && (
                          <div className="m-0 p-0">
                            {event.ageRestrictions.legalAgeEnforced ? (
                              <p className="btn-event adults m-0">+18</p>
                            ) : (
                              <p className="btn-event kids m-0">All ages</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="venue-details-wraper">
                      {event._embedded.venues[0].name && (
                        <p className="text-end mb-0">
                          {event._embedded.venues[0].name}
                        </p>
                      )}
                      {event._embedded.venues[0].address && (
                        <p className="text-end mb-0">
                          {event._embedded.venues[0].address.line1}
                        </p>
                      )}
                      {event._embedded.venues[0].address.line2 && (
                        <p className="text-end mb-0">
                          {event._embedded.venues[0].address.line2}
                        </p>
                      )}
                      {event._embedded.venues[0].postalCode && (
                        <p className="text-end mb-0">
                          {event._embedded.venues[0].postalCode}
                        </p>
                      )}
                      {event._embedded.venues[0].city.name && (
                        <p className="text-end mb-0">
                          {event._embedded.venues[0].city.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="price-purchase-wraper d-flex justify-content-end">
                    <div className="price-wraper d-flex me-4">
                      {event.priceRanges && event.priceRanges > 0 && (
                        <p className="price-from m-0 me-2">
                          From{" "}
                          <span className="fw-bolder ms-1">
                            {currencyDisplay(
                              event.priceRanges[1].min,
                              event.priceRanges[1].currency
                            )}
                          </span>
                        </p>
                      )}
                      {event.priceRanges && event.priceRanges > 0 && (
                        <p className="m-0 price-to">
                          To{" "}
                          <span className="fw-bolder ms-1">
                            {currencyDisplay(
                              event.priceRanges[1].max,
                              event.priceRanges[1].currency
                            )}
                          </span>
                        </p>
                      )}
                    </div>
                    {event.url && (
                      <a
                        href={event.url}
                        target="_blank"
                        className="btn btn-primary"
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
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}

export default Eventcard;
