import Row from '../components/Row';
import Hero from '../components/Hero';
import Colsec from '../components/Colsec';
import Genre from '../components/Genre';
import Top10 from '../components/Top10';
import { useAnime } from '../api/aniListApi';
import FirstSec from '../components/FirstSec';
import Arrow from '../assets/keyboard_arrow_left_24dp_000000_FILL0_wght700_GRAD0_opsz24.svg?react'
const Home = () => {
  const actionAnime=useAnime({perPage:12,genre:'Action',status:'RELEASING',sort:'SCORE_DESC'});
  const trendingAnime=useAnime({sort:'TRENDING_DESC',format:'TV',status:'FINISHED',perPage:20});
  const horrorAnime=useAnime({perPage:12,status:'FINISHED',sort:'END_DATE_DESC'});
  const handleClick=()=>{
     window.scrollTo({
     top: 0,
     left: 0,
     behavior: 'smooth'  
                    });
  }
  return (
    <div className='mt-16  flex flex-col w-full'>
      <button onClick={handleClick} className='rounded-3xl   z-100 bg-gray-400/40 active:bg-gray-700  backdrop-blur-xl fixed sm:hidden  bottom-0 right-0  m-2 w-9 h-9  flex items-center justify-center'><Arrow className='fill-white rotate-90   rounded-3xl'/></button>
    <FirstSec obj={trendingAnime?.data?.Page.media} loading={trendingAnime.isLoading}/>
    <Hero  />
        <Colsec   />
        <div className='md:flex w-full'>
          <div className='w-full'>
           
            <Row obj={horrorAnime?.data?.Page.media} loading={horrorAnime.isLoading}   title={'Latest Completed'} status={'FINISHED'} sort={'END_DATE_DESC'}  />
             <Row obj={actionAnime?.data?.Page.media} loading={actionAnime.isLoading} genre={"Action"} title={'Action Anime'} status={'RELEASING'} sort={'SCORE_DESC'}/>
          </div>
           <div className='flex flex-col  '>
        <Genre  />
        <Top10/>
           </div>
     
        </div>
     
    </div>
  )
}

export default Home
