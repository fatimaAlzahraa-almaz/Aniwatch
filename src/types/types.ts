export interface topColPropsType {
  title: string;
  sort: string;
  format: string;
  status: string;
}

export interface animeListPropsType {
  sort?: string | null;
  page?: number;
  perPage?: number | null;
  status?: string | null;
  type?: string | null;
  format?: string | null;
  genre?: string | null;
  search?: string | null;
}

export interface animeType {
  id: number | null;
  idMal: number | null;
  title: {
    romaji: string | null;
    english: string | null;
    native: string | null;
  } ;
  type: string | null;
  format: string | null;
  status: string | null;
  description: string | null;
  startDate: {
    year: number | null;
    month: number | null;
    day: number | null;
  } ;
  endDate: {
    year: number | null;
    month: number | null;
    day: number | null;
  } ;
  season: string | null;
  seasonYear: number | null;
  episodes: number | null;
  duration: number | null;
  coverImage: {
    medium: string | null;
    large: string | null;
    extraLarge: string | null;
  } ;
  trailer: {
    id: string | null;
    site: string | null;
    thumbnail: string | null;
  } ;
  bannerImage: string | null;
  genres: string[] | null;
  averageScore: number | null;
  popularity: number | null;
}

export interface HamburgerMenuProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HoverBoxPropsType {
  obj: animeType;
  setBoxHover: (boxHover: boolean) => void;
}

export interface rowPropsType {
  obj: animeType[] | undefined;
  loading: boolean;
  genre?: string | undefined;
  title: string;
  sort: string;
  status: string;
}

export interface animeListResponse {
  Page: {
    pageInfo: {
      hasNextPage: boolean | null;
      lastPage: number | null;
    } ;
    media: animeType[];
  } ;
}

export interface genreResponse{
  GenreCollection:string[];
}

export interface animeInfoResponse{
  Media:animeType|null;
}
