import React, { useState } from "react";
import { useAppStore } from "@/store/store";

export const Searchbar = () => {
  const [location, setLocation] = useState("");
  const { fetchCurrentDayWeather } = useAppStore();

  // console.log(currentDayWeather);
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    fetchCurrentDayWeather(location);
  };

  return (
    <div>
      <form method="get" onSubmit={handleSubmit}>
        <label>
          Search city
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
