import { useQuery } from "@tanstack/react-query";
import type {
  animeInfoResponse,
  animeListPropsType,
  animeListResponse,
  genreResponse,
} from "../types/types";
import { anilistClient } from "../services/animeClient";
import { animeListQuery, animeInfoQuery, genreQuery } from "./anime.graphql";
export const useAnime = (props: animeListPropsType = {}) => {
  const { page = 1, perPage = 50, type = "ANIME", ...filters } = props;

  return useQuery<animeListResponse>({
    queryKey: ["animeList", page, perPage, filters],
    queryFn: () => {
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== null && v !== ""),
      );
      const variables = {
        page,
        perPage,
        type,
        ...cleanFilters,
      };
      return anilistClient(animeListQuery, variables);
    },
  });
};
export const useAnimeInfo = ({ id }: { id: number }) => {
  return useQuery<animeInfoResponse>({
    queryKey: ["animeInfo", String(id)],
    queryFn: () => anilistClient(animeInfoQuery, { id: id }),
  });
};
export const useGenre = () => {
  return useQuery<genreResponse>({
    queryKey: ["genre"],
    queryFn: () => anilistClient(genreQuery),
  });
};
