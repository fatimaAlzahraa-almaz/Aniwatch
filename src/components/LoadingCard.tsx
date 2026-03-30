
const LoadingCard = () => {
  return (
      <div className='bg-gray-700/80   aspect-2/3   flex flex-col justify-end relative rounded-sm  '>
      <div  className="w-full sm:p-2 p-1 flex flex-col gap-y-1">
        <p className="bg-gray-600 w-2/3 sm:h-5 h-4 rounded-2xl "></p>
        <div className="flex w-full justify-between items-center  ">
          <p className='w-1/3 sm:h-5 h-4 bg-gray-600 rounded-2xl'></p>
          <p className='w-1/3 sm:h-5 h-4 bg-gray-600 rounded-2xl'></p>
        </div>
      </div>
    </div>
  )
}

export default LoadingCard
