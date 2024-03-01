import React, { useState } from "react";
import "./eventcard.css";
import { styled } from "@mui/material/styles";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Eventcard({ eventData, searchExecuted }) {
  const [expandedId, setExpandedId] = useState(null); // State to track the currently expanded card's ID

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
    return <div className="test">No events available</div>;
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
        <Card key={index} sx={{ maxWidth: "100%" }}>
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
                      <p class="venue-city mb-0 fw-bolder me-2">
                        {event._embedded.venues[0].city.name}
                      </p>
                    )}
                    {event._embedded.venues[0].name && (
                      <p class="venue-name mb-0 fw-bolder ">
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
              onClick={() => handleExpandClick(index)} // Pass index as ID
              // Add conditional style to rotate icon when expanded
              sx={{
                transform: expandedId === index ? "rotate(180deg)" : "none",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse
            in={expandedId === index} // Check if the current card's ID matches the expanded ID
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <div className="row">
                <div className="col-4">
                  <CardMedia
                    component="img"
                    height="194"
                    image="/card-img.jpg"
                    alt="Paella dish"
                  />
                </div>
                <div className="col-8">
                  <div className="bio-venue-wraper d-flex justify-content-between">
                    <div className="show-bio-wraper">
                      <p>Show date</p>
                      <p>Show time</p>
                      <p>Genre</p>
                      <p>Type</p>
                      <p>Legal for kids</p>
                    </div>
                    <div className="venue-details-wraper">
                      <p>Venue name</p>
                      <p>Venue city</p>
                      <p>Venue Address-1</p>
                      <p>Venue Address-2</p>
                      <p>Venue Postcode</p>
                    </div>
                  </div>
                  <div className="price-purchase-wraper d-flex justify-content-between">
                    <div className="price-wraper d-flex">
                      <p>Price from</p>
                      <p>Price till</p>
                      <p>Price currency</p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Get Tickets!
                    </a>
                  </div>
                </div>
              </div>
              <Typography paragraph>Important note</Typography>
              <Typography paragraph>Ticket purchase information</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}

export default Eventcard;
