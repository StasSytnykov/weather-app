import { create } from "zustand";
import { createCitySlice, CitySlice } from "@/store/slices/citySlice";
import {
  createCurrentDaySlice,
  CurrentDaySlice,
} from "@/store/slices/currentDaySlice";

type WeatherSlice = CitySlice & CurrentDaySlice;

export const useAppStore = create<WeatherSlice>()((...a) => ({
  ...createCitySlice(...a),
  ...createCurrentDaySlice(...a),
}));
