import { create } from "zustand";

interface SpaceState {
  listNow: object[];
  navigationState: string;
  search: (newList: object[]) => void;
  changeNavigationState: (newNavState: string) => void;
}

export const spaceFlightStore = create<SpaceState>((set) => ({
  listNow: [],
  navigationState: "/",
  search: (newList) => set({ listNow: newList }),
  changeNavigationState: (newNavState: string) =>
    set({ navigationState: newNavState }),
}));
