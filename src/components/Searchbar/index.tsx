import React, { useState } from "react";
import { useAppStore } from "@/store/store";

export const Searchbar = () => {
  const [value, setValue] = useState("");
  const { setNewCity } = useAppStore();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setNewCity(value);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
};
