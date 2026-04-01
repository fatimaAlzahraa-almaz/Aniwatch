import type { animeListType } from "../types/anime"
import Time from '../assets/schedule_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Play from '../assets/play_arrow_30dp_FFFFFF_FILL1_wght600_GRAD0_opsz24.svg?react'
import Arright from '../assets/keyboard_arrow_right_24dp_FFFFFF_FILL0_wght700_GRAD0_opsz24.svg?react'
import Arleft from '../assets/keyboard_arrow_left_24dp_000000_FILL0_wght700_GRAD0_opsz24.svg?react'
import { useState,useEffect ,useRef} from "react"
import parse from 'html-react-parser'
import {motion,AnimatePresence} from 'framer-motion'
import { useNavigate } from "react-router-dom"
import LoadingFirstSec from "./LoadingFirstSec"
const FirstSec = ({obj,loading}:{obj:animeListType[],loading:boolean}) => {
  const[index,setIndex]=useState(0);
  const navigate=useNavigate();
  const handleDetailClick=(id:number|null)=>{
    navigate('/info?id='+id);
  }
  
  const timeRef=useRef<number|null>(null);
  const stopTimer=()=>{
    if(timeRef.current){
      clearInterval(timeRef.current);
      timeRef.current=null;
    }
  }
  const handleArrRight=()=>{
    stopTimer();
    setIndex(prev=>(prev+1)%obj?.length);
  }
  const handleArrLeft=()=>{
    stopTimer();
    setIndex(prev=>(prev-1+obj?.length)%obj?.length);
  }
  useEffect(()=>{
    if(obj?.length>0) {
       timeRef.current=window.setInterval(()=>{
       setIndex((prev)=>{
       return (prev+1)%obj?.length;
      
       })
    
       },5000)
    }
    
   return ()=>stopTimer();

  },[obj?.length])

   
  if(loading || !obj)  return <LoadingFirstSec/>
  return (
   
    <div
        className="w-full sm:h-[30rem] h-[20rem] relative overflow-hidden   ">
             
           <div
           className="w-full h-full relative">
             <AnimatePresence  mode="wait"> 
            <motion.img
             key={obj[index]?.id}
            initial={{filter:'blur(7px)',scale:1.1}}
            animate={{filter:'blur(0px)',scale:1}}
            exit={{filter:'blur(7px)'}}
            transition={{duration:0.7}}
            className="absolute inset-0 w-full h-full object-cover object-center " src={obj[index]?.bannerImage ||  undefined}/>
              </AnimatePresence>
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-black/70 "></div>
            </div>
         
          <div className="absolute right-0 bottom-1 flex flex-col gap-1  mr-1 sm:mr-2">
            <button onClick={handleArrRight} className="bg-gray-500/60 active:bg-gray-600 cursor-pointer hover:bg-gray-500/70 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg "><Arright className="fill-gray-200  " /></button>
            <button onClick={handleArrLeft} className="bg-gray-500/60 cursor-pointer active:bg-gray-600 hover:bg-gray-500/70 w-7 h-7 sm:w-8 sm:h-8 flex items-center  justify-center rounded-lg relative"> <Arleft className="fill-gray-200  absolute   "/></button>
          </div>

            <AnimatePresence  mode="wait" > 
            <motion.div
            key={obj[index]?.id}
            initial={{y:40,scale:1.1,opacity:0}}
            animate={{y:[0,-10,-15] ,opacity:1,scale:1}}
            exit={{y:0,opacity:0}}
            transition={{duration:0.7}}
            className="absolute  bottom-0 flex flex-col gap-2 sm:gap-3 md:gap-5    w-2/3 md:w-1/2  m-4 sm:m-6 md:m-8">
               <p className="sm:text-xl text-xs text-amber-200 ">#{index+1} Spotlight</p>
               <p className="line-clamp-2 text-lg sm:text-3xl  md:text-4xl lg:text-5xl font-semibold">{ obj[index]?.title?.romaji }</p>
               <div className="sm:flex hidden gap-3 text-gray-100 font-extralight">
                <div className="flex">
                   <Play className="w-4 fill-gray-100"/>
                  <p>{obj[index]?.format}</p>
                </div>
                 <div className="flex gap-0.5">
                  <Time className="w-4 fill-gray-100"/>
                  <p>{obj[index]?.duration}m</p>
                </div>
                 <div>
                  <p>{obj[index]?.startDate?.year}</p>
                </div>
               </div>
               <p className="  hidden sm:line-clamp-3 font-extralight text-gray-100 text-lg leading-6 ">{obj[index]?.description ? parse(obj[index]?.description) : ''}</p>
               <div className="flex sm:gap-3 gap-2 font-normal sm:font-medium  flex-wrap">
                  <button onClick={()=>handleDetailClick(obj[index]?.id)} className='bg-yellow-200/90 flex text-black items-center justify-center py-1 sm:py-2 sm:w-[8rem] w-[6rem] rounded-3xl hover:bg-yellow-300/90 cursor-pointer  pr-2  min-w-0  '><Play className='min-w-0 w-4 sm:w-5  fill-black  '/><p className="min-w-0 truncate text-xs sm:text-sm">Watch Now</p></button>
                  <button onClick={()=>handleDetailClick(obj[index]?.id)} className='bg-gray-500/70 flex text-gray-200 items-center justify-center py-1 sm:py-2 w-[4rem] sm:w-[5rem] rounded-3xl hover:bg-gray-500/60 cursor-pointer pl-1 text-xs sm:text-sm min-w-0 '  ><p className="min-w-0 truncate">Details</p><Arright className='  fill-white  w-3 sm:w-4 min-w-0 '/></button>
               </div>
            </motion.div>
                </AnimatePresence>
             </div>
         
    
  )
}

export default FirstSec
