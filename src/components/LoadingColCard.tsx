
const LoadingColCard = () => {
  return (
    <div className='flex items-center  sm:h-32 h-28  w-full border-b border-b-gray-700/70 relative   sm:gap-3 gap-2 '>
 <div  className=' w-16  aspect-2/3 rounded-xl  bg-gray-600  '></div>
 <div className=' w-[70%] sm:gap-y-2 gap-y-1 flex flex-col'>
  <div  className=' bg-gray-600 h-5  w-1/2 rounded-2xl '></div>
     
        <div className='flex  gap-2'>
        <div className='bg-gray-600 h-5  w-1/5 rounded-2xl'></div>
        <div className='bg-gray-600 h-5  w-1/5 rounded-2xl'></div>
        <div></div>
        </div>
 </div>
  
  </div>
  )
}

export default LoadingColCard
