import { create } from "zustand";

type Author = {
  name: string;
};



export type Article = {
  id: number;
  title: string;
  authors: Author[];
  news_site: string;
  summary: string;
  published_at: string;
  image_url: string;
  url?: string;
  updated_at?: string;
  featured?: boolean;
  launches?: [];
  events?: [];
};

interface SpaceState {
  listNow: Article[];
  customListNow: Article[];
  articleNow: Article;
  stateNow: string;
  search: (newList: Article[]) => void;
  setArticleNow: (newArticle: Article) => void;
  customSearch: (newList: Article[]) => void;
  changeState: (newState: string) => void;
}

export const spaceFlightStore = create<SpaceState>((set) => ({
  listNow: [],
  customListNow: [],
  articleNow: {
    id: 0,
    title: "",
    authors: [],
    news_site: "",
    summary: "",
    published_at: "",
    image_url: "",
  },
  stateNow: "",
  search: (newList: Article[]) => set({ listNow: newList }),
  setArticleNow: (newArticle: Article) => set({ articleNow: newArticle }),
  customSearch: (newSearch: Article[]) => set({ customListNow: newSearch }),
  changeState: (newState: string) => set({ stateNow: newState }),
}));
