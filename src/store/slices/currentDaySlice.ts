import { StateCreator } from "zustand";
import axios from "axios";

// export interface CurrentDayWeather {
//   currentDay: {};
// }
export interface CurrentDaySlice {
  currentDayWeather: {};
  fetchCurrentDayWeather: (city: string) => void;
}

export const createCurrentDaySlice: StateCreator<CurrentDaySlice> = (set) => ({
  currentDayWeather: {},
  fetchCurrentDayWeather: async (city) => {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}current.json?&key=${process.env.API_KEY}&q=${city}`
      );
      set({ currentDayWeather: response.data });
    } catch (error: any) {
      if (error.response.status === 404) {
        alert("We can not find this city, please type another city.");
      }
    }
  },
});
