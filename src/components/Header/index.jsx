import "./header.css";
import React, { useEffect } from "react";
import axios from "axios";

function Header({ children }) {
  useEffect(() => {
    const fetchEvents = async () => {
      const API_KEY = "HjQcNIEkdwsQswwBQhfE1PO0smAoxyu4";
      const apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json";

      try {
        const response = await axios.get(apiUrl, {
          params: {
            apikey: API_KEY,
            keyword: "", // Can be band genre
            city: "London",
            startDateTime: "2023-09-01T00:00:00Z",
            endDateTime: "2025-09-30T23:59:59Z",
            size: 10,
          },
        });
        console.log("Events:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {children}
    </div>
  );
}

export default Header;

/*
Search can be done by
Date from and till
By artist
City
sadasdsadasd
*/
