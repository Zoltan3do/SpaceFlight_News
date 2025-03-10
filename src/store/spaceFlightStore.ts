import { create } from "zustand";

interface SpaceState {
  listNow: object[];
  search: (newList: object[]) => void;
}

export const spaceFlightStore = create<SpaceState>((set) => ({
  listNow: [],
  search: (newList) => set({ listNow: newList }),
}));
