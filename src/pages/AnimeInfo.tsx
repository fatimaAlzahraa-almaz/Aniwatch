import Star from '../assets/star_24dp_F9DB78_FILL1_wght600_GRAD0_opsz24.svg?react'
import Time from '../assets/schedule_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Play from '../assets/play_arrow_30dp_FFFFFF_FILL1_wght600_GRAD0_opsz24.svg?react'
import Add from '../assets/add_24dp_000000_FILL0_wght500_GRAD0_opsz24.svg?react'
import Added from '../assets/check_24dp_000000_FILL1_wght600_GRAD0_opsz24.svg?react'
import {useSearchParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAnimeInfo } from '../api/aniListApi'
import parse from 'html-react-parser'
import { useFavorite } from './store/favoritesStore'
import LoadingPage from '../components/LoadingPage'
const AnimeInfo = () => {
  const{favoritesList,toggleFavorites}=useFavorite();
  const[searchParams]=useSearchParams();
  const id:number=Number(searchParams.get('id'));
  const{data,isLoading}=useAnimeInfo({id});
  const isFav=favoritesList.some((item)=>item.id===id);

  if(isLoading)
    return(
  <LoadingPage/>
  )
 
  return (
    <div className='w-full mt-16 flex flex-col gap-5 p-2' > 
    <div className="flex   sm:flex-row flex-col gap-5 items-center sm:items-start ">
      
           <div className='sm:w-[16rem] border relative border-amber-200/30 overflow-hidden rounded-xl sm:h-[20rem] min-w-0 w-[12rem] h-[16rem]'>
               <img className='sm:hover:scale-105 absolute inset-0 h-full w-full object-cover object-center rounded-xl duration-150' src={data?.Media.coverImage?.large ?? undefined}/>
           </div>
       
      
       <div className="flex flex-col gap-y-5 sm:gap-y-6  w-full"> 
      <div className="flex items-center gap-2 flex-wrap">
        <NavLink to='/'>
          <p className='hover:text-yellow-300 cursor-pointer'>Home</p>
        </NavLink>
        <p className="w-1 h-1 bg-green-400/70 rounded-full"></p>
        <p>{data?.Media.format??'N/A'}</p>
      </div>
      <p className=" text-xl sm:text-2xl font-medium">{data?.Media.title.romaji ?? ''}</p>
      <div className="flex  gap-1 gap-y-2 sm:text-sm text-xs sm:font-light  flex-wrap  items-stretch ">
       
          
          <div className='flex items-center sm
             bg-gray-700 rounded-2xl  justify-center px-2 gap-0.5 py-1'>
            <Time className='fill-white  w-3'/>
            <p className='line-clamp-1 '>{data?.Media.duration ? data?.Media.duration +' m' :'N/A'}</p>
          </div>
          
        
         <div className='flex items-center bg-gray-700 rounded-2xl  justify-center px-2 py-1'>
             <p >{data?.Media.startDate?.year?? 'N/A'}</p>
         </div>
         <div className='flex justify-center items-center bg-gray-700 rounded-2xl line-clamp-1 px-2 py-1'>
              <p>{data?.Media.status??'N/A'}</p>
         </div>
        
          <div className='flex items-center justify-center  bg-gray-700 rounded-2xl px-2 gap-0.5 py-1'>
            <Star className=' w-4'/>
            <p>{data?.Media.averageScore ?  data?.Media.averageScore/10 : 'N/A'}</p>
          </div>
            
      
        
      </div>
      <p className='font-light text-sm sm:text-lg text-gray-300'>{data?.Media.description ? parse(data?.Media.description) : ''}</p>
      <div className='flex gap-2 flex-wrap'>
        {
          data?.Media.genres.map((el:any)=>{
            return(
              <p className=' border-1 border-yellow-200/40  p-1 rounded-3xl text-sm font-light px-2'>{el}</p>
            )
          })
        }
      </div>
      <div className="flex gap-1 sm:gap-2 text-black text-sm sm:text-lg  sm:justify-normal justify-center flex-wrap">
        <button className='bg-yellow-200  px-2 sm:px-4 rounded-3xl flex  items-center justify-center p-2 hover:bg-yellow-300 cursor-pointer pr-3 min-w-0 truncate'><Play className='fill-black w-5   '/>Watch now</button>
        {
          isFav ? <button onClick={()=>toggleFavorites(data?.Media)} className='bg-white px-2  sm:px-4 rounded-3xl flex items-center justify-center p-2 hover:bg-gray-100 cursor-pointer pr-3 min-w-0 truncate'><Added className=' w-5'/>Added</button>
          :
          <button onClick={()=>toggleFavorites(data?.Media)} className='bg-white px-2  sm:px-4 rounded-3xl flex items-center justify-center p-2 hover:bg-gray-100 cursor-pointer pr-3 min-w-0 truncate'><Add className=' w-5'/>Add to List</button>
        }
         
         
      </div>
      </div>
      
     
    </div>
    <div>
      {
        data?.Media.trailer?.id && data?.Media.trailer?.site=='youtube' && <iframe title='Anime trailer' className='w-full sm:h-120 h-80' src={'https://www.youtube.com/embed/'+data?.Media.trailer?.id}>
   </iframe>
      }
    </div>
   
    </div>
  )
}

export default AnimeInfo
