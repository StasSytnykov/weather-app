import React, { useState } from "react";
import { useAppStore } from "@/store/store";
import { AiOutlineSearch } from "react-icons/ai";

export const Searchbar = () => {
  const [location, setLocation] = useState("");
  const { fetchCurrentDayWeather } = useAppStore();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    fetchCurrentDayWeather(location);
  };

  return (
    <form method="get" onSubmit={handleSubmit} className="mt-40 mb-6">
      <label className="inline-flex items-center relative">
        <input
          className="rounded-full border-solid	outline-none drop-shadow-lg pt-2 pb-2 pl-3 pr-3 opacity-60 w-80"
          type="text"
          value={location}
          placeholder="Search city"
          onChange={(event) => setLocation(event.target.value)}
        />
        <button type="submit" className="p-1.5 absolute right-0">
          <AiOutlineSearch className="w-7 h-7 opacity-60" />
        </button>
      </label>
    </form>
  );
};
