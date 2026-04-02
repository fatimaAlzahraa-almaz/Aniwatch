import Star from '../assets/star_24dp_F9DB78_FILL1_wght600_GRAD0_opsz24.svg?react'
import Tv from '../assets/play_circle_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg?react'
import Play from '../assets/play_arrow_30dp_FFFFFF_FILL1_wght600_GRAD0_opsz24.svg?react'
import Heart from '../assets/favorite_24dp_000000_FILL1_wght600_GRAD0_opsz24.svg?react'
import { useNavigate} from 'react-router-dom'
import type { animeListType } from '../types/anime'
import {motion} from 'motion/react'
import parse from 'html-react-parser'
import { useFavorite } from '../pages/store/favoritesStore'
const Maincard = ( {obj,i}:{obj:animeListType,i:number}) => {
  const navigate=useNavigate();
  const{favoritesList,toggleFavorites}=useFavorite();
  const isFav=favoritesList.some((item)=>item.id===obj.id);
  const handleClick=()=>{
    if(obj?.id){
       navigate(`/info?id=${obj?.id}`);
    }
    
  
  }

  return (
   <motion.div
   whileHover={{y:-10}}
   transition={{duration:0.3,ease:'easeInOut',delay:0.1}}
   className="sm:w-[14rem] sm:h-[24rem] w-[10rem] h-[17.5rem] shrink-0 bg-gray-800 relative rounded-lg  group  text-gray-100">
     <div  className='w-full sm:h-[20rem] h-[14rem] overflow-hidden relative rounded-t-xl group' >
       
         <div   onClick={handleClick} className='absolute z-2 rounded-t-xl cursor-pointer opacity-5 bg-linear-to-t from-black inset-0 sm:group-hover:hidden '></div>
         <img  
         className=" absolute inset-0 w-full h-full  object-cover object-center rounded-t-xl  group-hover:scale-105   duration-200 delay-100 sm:group-hover:blur-md " src={obj?.coverImage?.large ?? undefined}/>
         <div   className='top-0 w-full h-full absolute  translate-y-[100%] text-gray-300   text-sm p-3 bg-gray-800/40 group-hover:translate-y-0 group-hover:transition group-hover:duration-400  cursor-pointer hidden sm:block z-3 flex flex-col'>
         <div  onClick={handleClick}  className='w-full '>
             <p className='font-semibold pb-2 text-white line-clamp-1 truncate'>{obj?.title?.romaji ?? ''}</p>
          <p className='font-extralight pb-1 line-clamp-8'>{ obj?.description ? parse(obj?.description ) : ''}</p>
          <div className='flex '>
            <p>Status: </p>
            <p className='font-extralight text-white'> { obj?.status ?? 'N/A'}</p>
          </div>
          <div className='flex flex-wrap'>
            <p>Aired:</p>
            <p className='font-extralight text-white'>{obj?.startDate?.year ?? 'N/A' }</p>
          </div>
          <div className='flex'>
            <p>Genres:</p>
            <p className='font-extralight text-white'>{obj?.genres ? obj?.genres[0] :'N/A'}</p>
          </div>
         </div>
          
          <div className='flex items-center justify-between pt-3 font-medium  absolute right-1 left-1 bottom-2'>
            <button onClick={handleClick} className='bg-yellow-200 flex text-black items-center justify-center py-1 w-[11rem] rounded-2xl hover:bg-yellow-300 cursor-pointer '> <Play className='  fill-black '/>Watch Now</button>
              <button onClick={()=>toggleFavorites(obj)} className='bg-gray-100 rounded-full    hover:bg-gray-200 w-8 h-8 flex items-center justify-center cursor-pointer '>
                 <Heart className={`${isFav ? `fill-red-500`:`fill-black`}`} /></button>
              
          </div>
         </div>
         <div className='absolute top-2 left-2 flex sm:group-hover:opacity-0 '>
      <p className="bg-gray-600/50 rounded-xl   sm:text-base text-sm py-1  px-3 font-semibold">{i < 4 ? `#0`+i :i>9 ? i : `0`+i}</p>
     </div>
     </div>
  
    

     
      
    <div className="w-full p-1  ">
       
    <p onClick={handleClick} className='max-w-[20ch] truncate  cursor-pointer  '>{obj?.title?.romaji??''}</p>
    
    <div className='flex w-full items-center justify-between text-xs sm:pt-2'>
      <div className='flex  items-center  '>
       <Tv className='w-3 sm:w-4 '/>
       <p >{obj?.format?? 'N/A'}</p>
      </div>
     
    <div className='flex items-center'>
    <Star className='w-4'/>
    <p>{obj?.averageScore ? obj?.averageScore/10 : 'N/A'}</p>
    </div>
    </div>
     
     
     </div>
    
   </motion.div> 
  )
}

export default Maincard