const LoadingTrendingCard = () => {
  return (
    <div className="sm:w-[14rem] sm:h-[24rem] w-[10rem] h-[17.5rem] shrink-0 bg-gray-700/80  rounded-lg p-1">
      <div className="w-full p-1 flex flex-col h-full justify-end sm:gap-y-2 gap-y-1">
        <p className="w-3/4 bg-gray-600  h-5 rounded-2xl "></p>
        <div className="flex w-full items-center justify-between ">
          <div className=" w-1/4 h-5  bg-gray-600 rounded-2xl"></div>
          <div className="w-1/4 h-5  bg-gray-600 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingTrendingCard;
