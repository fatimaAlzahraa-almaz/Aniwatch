import Circle from '../assets/play_arrow_30dp_FFFFFF_FILL1_wght600_GRAD0_opsz24.svg?react'
import Hoverbox from './Hoverbox'
import { useNavigate } from 'react-router-dom'
import type { animeListType } from '../types/anime'
import { useState } from 'react'
import {AnimatePresence} from 'framer-motion'
const Card = ({obj}:{obj:animeListType}) => {
  const navigate=useNavigate();
  const [hover,setHover]=useState(false);
  const [boxHover,setBoxHover]=useState(false);
  const hundleClick=()=>{
    if(obj?.id)
   navigate(`/info?id=${obj?.id}`);
  
  }
 
   
  return (
    <div className="bg-gray-800/70  aspect-2/3  text-sm flex flex-col relative rounded-xl    ">
      <div className='w-full  h-[85%]  cursor-pointer group relative'>
        <div
         onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        className='w-full h-full overflow-hidden rounded-t-xl relative '>
           <div onClick={hundleClick} className='absolute z-2 w-full cursor-pointer opacity-10 h-full bg-linear-to-t from-black rounded-t-xl  '></div>
            <img className="  group-hover:scale-105 transition duration-150  sm:group-hover:blur-sm   absolute inset-0 w-full h-full object-cover object-center rounded-t-xl " src={obj?.coverImage
?.large ?? undefined}/>
        </div>
        
      <Circle className=' hidden w-[25%] h-[25%]  sm:group-hover:flex  absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  fill-white transition'/>
     
      <div className='absolute bottom-0  text-xs flex w-full  font-medium text-center p-1 tracking-tight leading-tight min-w-0'>
        <p className='text-black bg-green-300/80 p-0.5 rounded-bl-sm rounded-tl-sm  mr-1'></p>
        <p className='bg-gray-600/70 rounded-br-sm rounded-tr-sm text-white p-0.5 max-w-[18ch] truncate min-w-0 '>{obj?.genres ? obj?.genres[0] : 'N/A'}</p>
      </div>

  {(hover || boxHover) && <AnimatePresence><Hoverbox   setBoxHover={setBoxHover} obj={obj}/></AnimatePresence> }
      </div>
      
      <div className="w-full sm:p-2 p-1.5 flex-col ">
       <p onClick={hundleClick} className="sm:text-base text-sm  sm:max-w-none max-w-[19ch] truncate cursor-pointer hover:text-yellow-300 pb-1">{obj?.title?.romaji?? ''}</p>
      
      <div className="flex w-full text-sm font-light text-gray-400 sm:gap-2 gap-1 items-center   ">
          <p className='line-clamp-1'>{obj?.format ?? "N/A"}</p>
        <div className='h-1   w-1 bg-emerald-600 rounded-full'></div>
          <p className='line-clamp-1'>{obj?.duration ? obj?.duration+' m' : 'N/A'}</p>
        
       
      </div>
      </div>
    </div>
  )
}

export default Card
