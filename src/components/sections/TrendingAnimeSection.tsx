import TrendingAnimeCard from "../anime/TrendingAnimeCard";
import Arright from "../../assets/keyboard_arrow_right_24dp_FFFFFF_FILL0_wght700_GRAD0_opsz24.svg?react";
import Arleft from "../../assets/keyboard_arrow_left_24dp_000000_FILL0_wght700_GRAD0_opsz24.svg?react";
import { useAnime } from "../../queries/anime.queries";
import LoadingTrendingCard from "../skeleton/LoadingTrendingCard";
import { useNavigate } from "react-router-dom";
const TrendingAnimeSection = () => {
  const { data, isLoading } = useAnime({ sort: "TRENDING_DESC", perPage: 15 });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/explore?sort=TRENDING_DESC&perPage=30&page=1`, {
      state: { title: "Trending Anime" },
    });
  };

  const slideLeft = () => {
    var slider: null | HTMLElement = document.getElementById("slider");

    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };
  const slideRight = () => {
    var slider: null | HTMLElement = document.getElementById("slider");

    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };
  return (
    <div className="w-full relative flex flex-col p-2  gap-3">
      <div className="flex justify-between">
        <p className="sm:text-xl text-lg sm:font-bold font-semibold   min-w-0 truncate ">
          Trending Anime
        </p>
        <button
          onClick={handleClick}
          className=" text-gray-300 font-light sm:text-base text-sm    hover:text-yellow-300 group cursor-pointer    flex items-center "
        >
          View more{" "}
          <Arright className=" px-1  pt-0.5 fill-gray-300 group-hover:fill-yellow-300" />
        </button>
      </div>
      <div className="relative  h-[19rem] sm:h-[26rem] ">
        <Arleft
          onClick={slideLeft}
          className="cursor-pointer fill-white absolute  top-1/2 -translate-y-1/2 z-4 bg-gray-600/65 hover:bg-gray-600/80 active:bg-black/70 hidden sm:block p-1 w-10 h-10   rounded-3xl"
        />
        <div
          id="slider"
          className="flex relative h-full overflow-x-scroll  scrollbar-hide  gap-2 sm:gap-3 scroll-smooth items-center"
        >
          {isLoading || !data
            ? Array.from({ length: 15 }).map((_, i) => (
                <LoadingTrendingCard key={i} />
              ))
            : data?.Page?.media?.map((el: any, index: number) => {
                return <TrendingAnimeCard obj={el} i={index + 1} key={index} />;
              })}
        </div>
        <Arright
          onClick={slideRight}
          className=" cursor-pointer fill-white absolute right-0 top-1/2 -translate-y-1/2  z-4  bg-gray-600/65 hidden sm:block  hover:bg-gray-600/80 active:bg-black/70  w-10 h-10 p-1 rounded-3xl"
        />
        <div className="flex relative h-full overflow-x-scroll  scrollbar-hide  gap-3 scroll-smooth "></div>
      </div>
    </div>
  );
};

export default TrendingAnimeSection;
