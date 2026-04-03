import AnimeRow from "../components/ui/AnimeRow";
import TrendingAnimeSection from "../components/sections/TrendingAnimeSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import GenresFilter from "../components/anime/GenresFilter";
import TopTenAnime from "../components/anime/TopTenAnime";
import { useAnime } from "../queries/anime.queries";
import FeaturedSection from "../components/sections/FeaturedSection";
import Arrow from "../assets/keyboard_arrow_left_24dp_000000_FILL0_wght700_GRAD0_opsz24.svg?react";

const HomePage = () => {
  const actionAnime = useAnime({
    perPage: 12,
    genre: "Action",
    status: "RELEASING",
    sort: "SCORE_DESC",
  });

  const horrorAnime = useAnime({
    perPage: 12,
    status: "FINISHED",
    sort: "END_DATE_DESC",
  });
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-16  flex flex-col w-full">
      <button
        onClick={handleClick}
        className="rounded-3xl   z-90 bg-gray-400/40 active:bg-gray-700  backdrop-blur-xl fixed sm:hidden  bottom-0 right-0  m-3 w-10 h-10  flex items-center justify-center"
      >
        <Arrow className="fill-white rotate-90   rounded-3xl" />
      </button>
      <FeaturedSection />
      <TrendingAnimeSection />
      <ColumnsSection />
      <div className="md:flex w-full">
        <div className="w-full">
          <AnimeRow
            obj={horrorAnime?.data?.Page?.media}
            loading={horrorAnime.isLoading}
            title={"Latest Completed"}
            status={"FINISHED"}
            sort={"END_DATE_DESC"}
          />
          <AnimeRow
            obj={actionAnime?.data?.Page?.media}
            loading={actionAnime.isLoading}
            genre={"Action"}
            title={"Action Anime"}
            status={"RELEASING"}
            sort={"SCORE_DESC"}
          />
        </div>
        <div className="flex flex-col w-full md:max-w-70 lg:max-w-100 ">
          <GenresFilter />
          <TopTenAnime />
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
