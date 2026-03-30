import Row from '../components/Row';
import Hero from '../components/Hero';
import Colsec from '../components/Colsec';
import Genre from '../components/Genre';
import Top10 from '../components/Top10';
import { useAnime } from '../api/aniListApi';
import FirstSec from '../components/FirstSec';
const Home = () => {
  const actionAnime=useAnime({perPage:12,genre:'Action',status:'RELEASING',sort:'SCORE_DESC'});
   const trendingAnime=useAnime({sort:'POPULARITY_DESC',format:'TV'});
  const horrorAnime=useAnime({perPage:12,status:'FINISHED',sort:'END_DATE_DESC'});

  return (
    <div className='mt-16  flex flex-col w-full'>
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
