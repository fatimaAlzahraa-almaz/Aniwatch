import AnimeColumnCard from "./AnimeColumnCard";
import { useAnime } from "../../api/anime.queries"
import LoadingColumnCard from "../skeleton/LoadingColumnCard";
const TopTenAnime = () => {
  const { data, isLoading } = useAnime({
    sort: "SCORE_DESC",
    status: "RELEASING",
    perPage: 10,
  });

  return (
    <div className="flex-col w-full p-2 ">
      <p className="sm:text-xl   text-lg font-semibold text-yellow-200 pb-5 min-w-0">
        Top 10
      </p>
      <div>
        {isLoading || !data
          ? Array.from({ length: 10 }).map((_, i) => (
              <LoadingColumnCard key={i} />
            ))
          : data?.Page?.media?.map((el: any, i: number) => {
              return <AnimeColumnCard obj={el} key={i} />;
            })}
      </div>
    </div>
  );
};

export default TopTenAnime;
