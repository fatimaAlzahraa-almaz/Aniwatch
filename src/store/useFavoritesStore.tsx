import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { animeType } from "../types/types";
type favoritesStoreType = {
  favoritesList: animeType[];
  toggleFavorites: (el: animeType) => void;
  isFavorite: (el: animeType) => boolean;
};

export const useFavoritesStore = create<favoritesStoreType>()(
  persist(
    (set, get) => ({
      favoritesList: [],
      toggleFavorites: (el) => {
        const { favoritesList } = get();
        const isExist = favoritesList.some((item) => item.id === el.id);
        if (isExist) {
          set({
            favoritesList: favoritesList.filter((item) => item.id !== el.id),
          });
        } else {
          set({ favoritesList: [...favoritesList, el] });
        }
      },
      isFavorite: (el) => {
        const { favoritesList } = get();
        return favoritesList.some((item) => item.id === el.id);
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
