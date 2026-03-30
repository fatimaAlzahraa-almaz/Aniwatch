import Maincard from './Maincard'
import Arleft from '../assets/arrow_back_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Arright from '../assets/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import { useAnime } from '../api/aniListApi'
import LoadingMainCard from './LoadingMainCard'
const Hero = () => {
    
   const{data,isLoading}=useAnime({sort:'TRENDING_DESC',perPage:15});

   
   const slideLeft=()=>{
    var slider:null | HTMLElement=document.getElementById('slider');
     
    if(slider){
      slider.scrollLeft=slider.scrollLeft-500;
       
    }
    
   }
   const slideRight=()=>{
    var slider:null | HTMLElement=document.getElementById('slider');
   
    if(slider){
      slider.scrollLeft=slider.scrollLeft+500;
       
    }
    
   }
  return (
    <div className='w-full relative flex flex-col p-2 '>
       <p className='sm:text-xl text-lg sm:font-bold font-semibold pb-4  min-w-0 truncate '>Trending Anime</p>
      <div className='relative  h-[19rem] sm:h-[26rem] '>
        <Arleft onClick={slideLeft}  className='cursor-pointer fill-white absolute  top-1/2 -translate-y-1/2 z-4 bg-gray-600/65 hover:bg-gray-600/80 active:bg-black/70 hidden sm:block  w-10 h-10 p-2 pl-3 rounded-3xl'/>
          <div id='slider' className='flex relative h-full overflow-x-scroll  scrollbar-hide  gap-3 scroll-smooth items-center'>
      {
        (isLoading || !data) ? Array.from({length:15}).map((_,i)=>
        <LoadingMainCard key={i}/>
        )
      :
      
       data?.Page.media.map((el:any,index:number)=>{
        return(
          <Maincard 
           
          obj={el} i={index+1} key={index} />
        )
       })
      }
        
    </div>
    <Arright onClick={slideRight} className=' cursor-pointer fill-white absolute right-0 top-1/2 -translate-y-1/2  z-4 c bg-gray-600/65 hidden sm:block  hover:bg-gray-600/80 active:bg-black/70  w-10 h-10 p-2 pr-3 rounded-3xl'/>
          <div className='flex relative h-full overflow-x-scroll  scrollbar-hide  gap-3 scroll-smooth '></div>
      </div>
        
    
 
   
      </div>
        
    
     
  )
}

export default Hero
