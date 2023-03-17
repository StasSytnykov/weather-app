import { StateCreator } from "zustand";

export interface CitySlice {
  city: string;
  setNewCity: (newCity: string) => void;
}

export const createCitySlice: StateCreator<CitySlice> = (set) => ({
  city: "",
  setNewCity: (newCity) => set({ city: newCity }),
});
