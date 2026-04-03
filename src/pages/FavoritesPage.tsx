import { useFavoritesStore } from "../store/useFavoritesStore";
import AnimeCard from "../components/anime/AnimeCard";
import Close from "../assets/close_40dp_FFFFFF.svg?react";

const FavoritesPage = () => {
  const { favoritesList, toggleFavorites } = useFavoritesStore();
  return (
    <div className="mt-16 p-2 flex flex-col w-full gap-y-4 ">
      <p className="sm:text-xl  text-lg font-semibold text-yellow-200  min-w-0 truncate ">
        My List
      </p>
      <div className="grid grid-cols-2 min-[480px]:grid-cols-3  min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[1380px]:grid-cols-6 gap-4  w-full ">
        {favoritesList.map((el: any, i: number) => (
          <div className="relative">
            <button
              onClick={() => toggleFavorites(el)}
              className="absolute z-5 m-1 bg-gray-600/80 rounded-2xl active:bg-gray-600 cursor-pointer "
            >
              <Close className="sm:w-7 sm:h-7 w-6 h-6" />
            </button>
            <AnimeCard obj={el} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
