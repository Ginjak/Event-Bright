import "./upcomingevents.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      {events.length > 0 ? (
        <div>{events[0].name}</div>
      ) : (
        <div>No upcoming events</div>
      )}
    </div>
  );
};

export default Upcomingevents;
