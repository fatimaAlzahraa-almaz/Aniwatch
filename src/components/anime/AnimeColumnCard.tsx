import Time from "../../assets/watch_later_24dp_000000.svg?react";
import Hoverbox from "../ui/HoverBox";
import { useNavigate } from "react-router-dom";
import type { animeType } from "../../types/types";
import Calender from "../../assets/calendar_today_24dp_000000.svg?react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
const AnimeColumnCard = ({ obj }: { obj: animeType }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [boxHover, setBoxHover] = useState(false);
  const hundleClick = () => {
    if (obj?.id) navigate(`/info/${obj?.id}`);
  };

  return (
    <motion.div
      className={`flex items-center    w-full border-b border-b-gray-700/70 hover:bg-gray-700/60   relative text-gray-50  duration-100 ease-in-out h-[8rem] p-1`}
    >
      <div className=" h-[7rem]   w-[5rem]   rounded-xl cursor-pointer group   relative ">
        <div
          onClick={hundleClick}
          className="w-full h-full relative overflow-hidden rounded-xl "
        >
          <img
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`absolute inset-0 w-full h-full object-cover objetc-center rounded-xl  ${hover ? "scale-110" : "scale-100"} duration-200`}
            src={obj?.coverImage?.large ?? undefined}
          />
        </div>
        {(hover || boxHover) && (
          <AnimatePresence>
            {" "}
            <Hoverbox setBoxHover={setBoxHover} obj={obj} />
          </AnimatePresence>
        )}
      </div>
      <div className=" p-2  flex-1 min-w-0 ">
        <p
          onClick={hundleClick}
          className="sm:text-base  text-sm  line-clamp-2  pb-1 hover:text-yellow-200 cursor-pointer "
        >
          {obj?.title?.romaji ?? "N/A"}
        </p>
        <div className="flex  text-sm  gap-[2.5px]  items-center text-gray-800 font-base   min-w-0">
          <div className="flex items-center  h-5  bg-emerald-200/90 rounded-bl-sm rounded-tl-sm gap-0.5 px-1 line-clamp-1">
            <Time className="fill-gray-800 w-3  " />
            <p className="text-xs   ">
              {obj?.duration ? obj?.duration + "m" : "N/A"}
            </p>
          </div>

          <div className="flex  items-center h-5 bg-rose-200/90 rounded-br-sm rounded-tr-sm gap-0.5 px-1 line-clamp-1">
            <Calender className="w-3 fill-gray-800" />
            <p className="  text-xs   ">{obj?.startDate?.year ?? "N/A"}</p>
          </div>
          <div className="h-1 w-1 bg-emerald-500 rounded-full ml-1 mr-1"></div>
          <p className="text-gray-200 font-extralight line-clamp-1 min-w-0 truncate">
            {obj?.format ?? "N/A"}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimeColumnCard;
