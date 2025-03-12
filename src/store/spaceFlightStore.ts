import { create } from "zustand";

interface SpaceState {
  listNow: object[];
  customListNow: object[];
  articleNow: object;
  search: (newList: object[]) => void;
  setArticleNow: (newArticle: object) => void;
  customSearch: (newList: object[]) => void;
}

export const spaceFlightStore = create<SpaceState>((set) => ({
  listNow: [],
  customListNow: [],
  articleNow: {},
  search: (newList: object[]) => set({ listNow: newList }),
  setArticleNow: (newArticle: object) => set({ articleNow: newArticle }),
  customSearch: (newSearch: object[]) => set({ customListNow: newSearch }),
}));
