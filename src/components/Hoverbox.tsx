import Star from '../assets/star_24dp_F9DB78_FILL1_wght600_GRAD0_opsz24.svg?react'
import Heart from '../assets/favorite_24dp_000000_FILL1_wght600_GRAD0_opsz24.svg?react'
import Circle from '../assets/play_arrow_30dp_FFFFFF_FILL1_wght600_GRAD0_opsz24.svg?react'
import type { animeListType } from '../types/anime'
import parse from 'html-react-parser'
import {motion} from 'framer-motion'
import { useFavorite } from '../pages/store/favoritesStore'
const Hoverbox = ({obj,setBoxHover}:{obj:animeListType,setBoxHover:(boxHover:boolean)=>void}) => {
  const{toggleFavorites,favoritesList}=useFavorite();
  const isFav=favoritesList.some((item)=>item.id===obj.id);
  return (
    
      <motion.div 
       onMouseEnter={()=>setBoxHover(true)}
       onMouseLeave={()=>setBoxHover(false)}
       key={obj?.id}
       initial={{opacity:0,y:40}}
       animate={{opacity:1,y:0}}
       exit={{opacity:0,y:20}}
       transition={{duration:0.2}}
       className={` absolute top-1/2 hidden sm:block   min-w-[20rem]   max-w-[22rem] grow-0 rounded-sm backdrop-blur-lg   left-1/5 p-3 z-110 ` }>

      <p className='pb-2 text-lg font-medium line-clamp-2'>{obj?.title?.romaji}</p>

      <div className='flex justify-between items-center pb-2'>
        <div className='flex items-center  justify-center '>
          <Star className='w-5 '/>
          <p>{obj?.averageScore ? obj?.averageScore/10 : 'N/A'}</p>
        </div>
        <p className='bg-emerald-300 text-black  h-[10%] text-xs font-light text-center p-1 px-3 rounded-xl line-clamp-1 truncate'>{obj?.format ?? 'N/A'}</p>
      </div>

       <p className="text-sm font-extralight   text-gray-200 line-clamp-5 ">{obj?.description ? parse(obj?.description) : 'N/A'}</p>

       <div className="text-sm font-extralight pb-3 text-gray-200">
        <p>Japanese: <span className='text-white'>{obj?.title?.native ?? 'N/A'}</span></p>
        <p>Synonyms: <span className='text-white'>{obj?.title?.english ?? 'N/A'}</span></p>
        <p>Aired: <span className='text-white'>{obj?.startDate?.year ?? 'N/A'}</span></p>
        <p>Status: <span className='text-white'>{obj?.status ?? 'N/A'}</span></p>
        <p>Genres: <span className='text-white'>{obj?.genres ? obj?.genres.map((i)=><span>{i+' '}</span>) : 'N/A'}</span></p>
      </div>

      <div className='pb-1 flex items-center justify-between w-full'>
        <button className='bg-yellow-200 hover:bg-yellow-300 cursor-pointer flex  text-black w-[84%] rounded-3xl text-lg py-1 justify-center items-center'><Circle className='fill-black h-8 pt-0.5 '/>watch now</button>
        <button onClick={()=>toggleFavorites(obj)} className='bg-white w-10 h-10 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-gray-300'>
          <Heart className={`${isFav ? `fill-red-500`:`fill-black`}`}/>
        </button>
         
      </div>

      </motion.div>
     
  )
}

export default Hoverbox