import "./upcomingevents.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Upcomingevents = () => {
  const [events, setEvents] = useState([]);

  function removeDuplicates(arr) {
    const uniqueNames = new Set(); // Using a Set to store unique names

    return arr.filter((element) => {
      // Check if the name is unique
      if (!uniqueNames.has(element.name)) {
        uniqueNames.add(element.name); // Add the name to the set of unique names
        return true; // Keep this element in the filtered array
      }
      return false; // Discard this element from the filtered array
    });
  }

  function smallImage(images) {
    // Iterate through the images array
    for (const image of images) {
      // Check if the image has a "width" property greater than 1023
      if (
        image.hasOwnProperty("width") &&
        typeof image.width === "number" &&
        image.width > 400
      ) {
        return image.url; // Return the URL of the first image that meets the condition
      }
    }
    return null; // Return null if no image with width > 1023 is found
  }

  const arrWithUniqueEvents = removeDuplicates(events);
  console.log(arrWithUniqueEvents);
  useEffect(() => {
    async function fetchUkEvents() {
      const apiKey = "HjQcNIEkdwsQswwBQhfE1PO0smAoxyu4";
      const countryCode = "GB";
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryCode}&size=50&classificationName=music&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log(response.data._embedded.events); // Log the events array
        setEvents(response.data._embedded.events);
      } catch (error) {
        console.error("Error fetching upcoming shows:", error);
      }
    }

    fetchUkEvents();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      {arrWithUniqueEvents.length > 0 ? (
        <div className="upcoming-events-wraper row row-cols-1 row-cols-md-2 g-4">
          {arrWithUniqueEvents.slice(0, 8).map((event, index) => (
            <div className="col" key={event.id}>
              <div className="card bg-dark text-white">
                <img
                  src={smallImage(event.images)}
                  className="card-img"
                  alt={event.name}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">{event.name}</h5>
                  {event.dates && (
                    <p className="card-text">{event.dates.start.localDate}</p>
                  )}
                  {event.dates && (
                    <p className="card-text">{event.dates.start.localTime}</p>
                  )}
                </div>
              </div>
            </div>

            // <Card key={event.id} sx={{ maxWidth: 405 }}>
            //   <CardMedia
            //     sx={{ height: 140 }}
            //     image={smallImage(event.images)}
            //     title={event.name}
            //   />
            //   <CardContent>
            //     <Typography gutterBottom variant="h5" component="div">
            //       {event.name}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Test
            //     </Typography>
            //   </CardContent>
            // </Card>
          ))}
        </div>
      ) : (
        <div>No upcoming events</div>
      )}

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Test
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Upcomingevents;
