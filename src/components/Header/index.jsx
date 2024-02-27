import "./header.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Header({ children }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Function to fetch events from Ticketmaster API
    const fetchEvents = async () => {
      const API_KEY = "HjQcNIEkdwsQswwBQhfE1PO0smAoxyu4"; // Replace with your Ticketmaster API key
      const apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json";
      const params = {
        apikey: API_KEY,
        keyword: "concert", // Example: searching for concerts
        // city: "London", // Example: searching in New York
      };

      try {
        const response = await axios.get(apiUrl, { params });
        setEvents(response.data._embedded.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents(); // Call the function to fetch events when component mounts
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  return (
    <>
      <header className="header">
        <h1>Events</h1>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {/* Render event name and city */}
              {event.name} - {event._embedded.venues[0].city.name}
            </li>
          ))}
        </ul>
        {children}
      </header>
    </>
  );
}

export default Header;
