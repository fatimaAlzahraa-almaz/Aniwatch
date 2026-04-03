import AnimeCard from "../components/anime/AnimeCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/ui/Pagination";
import GenresFilter from "../components/anime/GenresFilter";
import TopTenAnime from "../components/anime/TopTenAnime";
import { useAnime } from "../queries/anime.queries";
import LoadingAnimeCard from "../components/skeleton/LoadingAnimeCard";
import { useEffect } from "react";
import Arrow from "../assets/keyboard_arrow_left_24dp_000000_FILL0_wght700_GRAD0_opsz24.svg?react";
import { useLocation } from "react-router-dom";
import ErrorMessage from "../components/skeleton/ErrorMessage";
const AnimeExplorePage = () => {
  const [searchParams] = useSearchParams();
  const sort: string | null = searchParams.get("sort");
  const format: string | null = searchParams.get("format");
  const page = Number(searchParams.get("page"));
  const status: string | null = searchParams.get("status");
  const genre: string | null = searchParams.get("genre");
  const perPage: number | null = searchParams.get("perPage")
    ? Number(searchParams.get("perPage"))
    : null;
  const que = searchParams.get("q");
  const { data, isLoading, error, refetch } = useAnime({
    sort,
    page,
    format,
    status,
    genre,
    perPage,
    search: que,
    type: "ANIME",
  });
  const location = useLocation();
  const title = location.state.title;
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sort, format, page, status, genre, perPage, que]);

  return (
    <div className="mt-16 p-2 w-full flex ">
      <button
        onClick={handleClick}
        className="rounded-3xl   z-90 bg-gray-400/40 active:bg-gray-700  backdrop-blur-xl fixed sm:hidden  bottom-0 right-0  m-3 w-10 h-10 flex items-center justify-center "
      >
        <Arrow className="fill-white rotate-90  rounded-3xl" />
      </button>
      <div className="min-[1200px]:flex w-full mt-2">
        <div className="flex flex-col gap-4 w-full ">
          <p className="sm:text-xl  text-lg font-medium  min-w-0 truncate ">
            {title}
          </p>
          {
             error ? <ErrorMessage refetch={refetch}/>
             :
          
          <div className="grid grid-cols-2 min-[480px]:grid-cols-3  min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[1380px]:grid-cols-6 gap-2 sm:gap-4  w-full ">
            {isLoading ? (
              Array.from({ length: 30 }).map((_, i) => (
                <LoadingAnimeCard key={i} />
              ))
            ) :   (
              data?.Page?.media?.map((el: any, i: number) => {
                return <AnimeCard obj={el} key={i} />;
              })
            )}
          </div>
              }
          <Pagination
            maxPage={data?.Page?.pageInfo?.lastPage ?? 1}
            title={title}
          />
        </div>
        <div className="flex flex-col w-full min-[1200px]:max-w-100">
          <GenresFilter />
          <TopTenAnime />
        </div>
      </div>
    </div>
  );
};

export default AnimeExplorePage;
