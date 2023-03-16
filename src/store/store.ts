import { create } from "zustand";
import { creatCitySlice, CitySlice } from "@/store/slices/bearsSlice";

export const useAppStore = create<CitySlice>()((...a) => ({
  ...creatCitySlice(...a),
}));
