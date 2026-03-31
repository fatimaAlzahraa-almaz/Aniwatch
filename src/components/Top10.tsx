import Colcard from './Colcard'
import Arrow from '../assets/keyboard_arrow_right_24dp_FFFFFF_FILL0_wght700_GRAD0_opsz24.svg?react'
import { useNavigate } from 'react-router-dom'
import { useAnime } from '../api/aniListApi'
import LoadingColCard from './LoadingColCard'
const Top10 = ( ) => {
const navigate=useNavigate();
const{data,isLoading}=useAnime({sort:'SCORE_DESC',status:'RELEASING',perPage:10});
const handleClick=()=>{
navigate(`/top?status=RELEASING&sort=SCORE_DESC&perPage=30&page=1`)
}

  return (
    <div className='flex-col w-full p-2 '>
      <p className='sm:text-2xl  text-lg font-semibold text-yellow-200 pb-5 min-w-0'>Top 10</p>
      <div>
        {
          (isLoading || !data) ? Array.from({length:10}).map((_,i)=>
          <LoadingColCard key={i}/>
          )
        
      :
         data?.Page.media.map((el:any,i:number)=>{
            return(
                <Colcard obj={el} key={i} />
          )
        })
      }
     </div>
     <div className='flex py-4 font-light sm:text-base text-sm items-center gap-1 hover:text-yellow-300 group cursor-pointer'>
        <button onClick={handleClick}  className='cursor-pointer'>View more</button>
      <Arrow className=' px-1 pt-0.5 group-hover:fill-yellow-300'/>
     </div>
      
    </div>
    
  )
}

export default Top10
