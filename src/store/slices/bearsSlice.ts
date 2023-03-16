import { StateCreator } from "zustand";

export interface CitySlice {
  city: string;
  setNewCity: (newCity: string) => void;
}

export const creatCitySlice: StateCreator<CitySlice> = (set) => ({
  city: "",
  setNewCity: (newCity) => set((state) => ({ city: (state.city = newCity) })),
  // increase: (by) => set((state) => ({ bears: state.bears + by })),
});
