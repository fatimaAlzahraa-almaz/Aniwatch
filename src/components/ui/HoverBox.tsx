
import Star from "../../assets/star_24dp_F9DB78_FILL1_wght600_GRAD0_opsz24.svg?react";
import Heart from "../../assets/favorite_24dp_000000_FILL1_wght600_GRAD0_opsz24.svg?react";
import Circle from "../../assets/play_arrow_30dp_FFFFFF_FILL1_wght600_GRAD0_opsz24.svg?react";
import type { HoverBoxPropsType } from "../../types/types";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";

type Side = "left" | "right";

const HoverBox = ({ obj, setBoxHover }: HoverBoxPropsType) => {
  const { toggleFavorites, isFavorite } = useFavoritesStore();
  const isFav = isFavorite(obj);
  const navigate = useNavigate();
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [side, setSide] = useState<Side>("right");

  const handleClick = () => {
    navigate("/info/" + obj?.id);
  };

  useLayoutEffect(() => {
    const updatePosition = () => {
      const box = boxRef.current;
      if (!box) return;

      const parent = box.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const boxWidth = box.offsetWidth || 352;
      const gap = 8;

      const spaceRight = window.innerWidth - parentRect.right;
      const spaceLeft = parentRect.left;

      if (spaceRight < boxWidth + gap && spaceLeft > spaceRight) {
        setSide("left");
      } else {
        setSide("right");
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <motion.div
      ref={boxRef}
      onMouseEnter={() => setBoxHover(true)}
      onMouseLeave={() => setBoxHover(false)}
      key={obj?.id}
      initial={{ opacity: 0, y: 70}}
      animate={{ opacity: 1, y: 60 }}
      exit={{ opacity: 0, y: 20}}
      transition={{ duration: 0.2 }}
      className={`absolute top-0 hidden sm:block min-w-[20rem] max-w-88 grow-0 rounded-sm backdrop-blur-lg p-3 z-110 ${
        side === "right" ? "left-1/2 ml-2" : "right-1/2 mr-2"
      }`}
    >
      <p className="pb-2 text-lg font-medium line-clamp-2">
        {obj?.title?.romaji}
      </p>

      <div className="flex justify-between items-center pb-2">
        <div className="flex items-center justify-center">
          <Star className="w-5" />
          <p>{obj?.averageScore ? obj?.averageScore / 10 : "N/A"}</p>
        </div>
        <p className="bg-emerald-300 text-black h-[10%] text-xs font-light text-center p-1 px-3 rounded-xl line-clamp-1 truncate">
          {obj?.format ?? "N/A"}
        </p>
      </div>

      <p className="text-sm font-extralight text-gray-200 line-clamp-5">
        {obj?.description ? parse(obj?.description) : "N/A"}
      </p>

      <div className="text-sm font-extralight pb-3 text-gray-200">
        <p>
          Japanese:{" "}
          <span className="text-white">{obj?.title?.native ?? "N/A"}</span>
        </p>
        <p>
          Synonyms:{" "}
          <span className="text-white">{obj?.title?.english ?? "N/A"}</span>
        </p>
        <p>
          Aired:{" "}
          <span className="text-white">{obj?.startDate?.year ?? "N/A"}</span>
        </p>
        <p>
          Status: <span className="text-white">{obj?.status ?? "N/A"}</span>
        </p>
        <p>
          Genres:{" "}
          <span className="text-white">
            {obj?.genres
              ? obj?.genres.map((i, index) => <span key={index}>{i + " "}</span>)
              : "N/A"}
          </span>
        </p>
      </div>

      <div className="pb-1 flex items-center justify-between w-full">
        <button
          onClick={handleClick}
          className="bg-yellow-200 hover:bg-yellow-300 cursor-pointer flex text-black w-[84%] rounded-3xl text-lg py-1 justify-center items-center"
        >
          <Circle className="fill-black h-8 pt-0.5" />
          watch now
        </button>
        <button
          onClick={() => toggleFavorites(obj)}
          className="bg-white w-10 h-10 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-gray-300"
        >
          <Heart className={`${isFav ? "fill-red-500" : "fill-black"}`} />
        </button>
      </div>
    </motion.div>
  );
};

export default HoverBox;