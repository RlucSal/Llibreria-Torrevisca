// Authorization= Bearer UI75IFUFEDQBJZU3ICFY
// API key =" VAJ47MAGSSUQJZTSF5"
// Client secret = "33QCUW6RBQRKCAJBRT5R2DANF7SUUWFQX6TAVEUJ7XX5R22JYO"
// Private token = "UI75IFUFEDQBJZU3ICFY"
// Public token "CAH3V4XQQB4K6CE5E44M"
// User Id = "564193004749"

import React, { useEffect, useState } from "react";
import axios from "axios";

const EventbriteIntegration = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.eventbriteapi.com/v3/users/me/",
          {
            headers: {
              Authorization: "Bearer UI75IFUFEDQBJZU3ICFY",
            },
          }
        );

        // Check if the response data is an object
        if (typeof response.data === "object") {
          setUser(response.data);
        } else {
          console.error("Invalid data structure:", response.data);
          setError("Invalid data structure");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Token expired or invalid");
          setError("Token expired or invalid");
        } else {
          console.error("Error:", error.message);
          setError("An error occurred while fetching data");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Eventbrite User</h2>
      {user ? (
        <ul>
          <li>ID: {user.id}</li>
          <li>Name: {user.name}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default EventbriteIntegration;
