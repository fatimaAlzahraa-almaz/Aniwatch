import AnimeColumnCard from "./AnimeColumnCard";
import Arrow from "../../assets/keyboard_arrow_right_24dp_FFFFFF_FILL0_wght700_GRAD0_opsz24.svg?react";
import { useNavigate } from "react-router-dom";
import type { topColPropsType, animeType } from "../../types/types";
import LoadingColumnCard from "../skeleton/LoadingColumnCard";

const TopAnimeColumn = ({
  obj,
  props,
  loading,
}: {
  obj: animeType[];
  props: topColPropsType;
  loading: boolean;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(
      `/explore?${props.sort == "" ? "" : "sort=" + props.sort + "&"}${props.format == "" ? "" : "format=" + props.format + "&"}${props.status == "" ? "" : "status=" + props.status + "&"}perPage=30&page=1`,
      { state: { title: props.title } },
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="sm:text-2xl  text-lg font-semibold text-yellow-200 min-w-0 truncate ">
        {props.title}
      </p>
      <div>
        {loading || !obj
          ? Array.from({ length: 4 }).map((_, i) => (
              <LoadingColumnCard key={i} />
            ))
          : obj?.map((el: any, i: number) => {
              return i < 4 && <AnimeColumnCard obj={el} key={i} />;
            })}
      </div>

      <button
        onClick={handleClick}
        className=" flex  font-light sm:text-base text-sm items-center gap-1 hover:text-yellow-300 group cursor-pointer"
      >
        View more
        <Arrow className=" px-1 pt-0.5 group-hover:fill-yellow-300" />
      </button>
    </div>
  );
};

export default TopAnimeColumn;
