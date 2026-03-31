
import Colcard from './Colcard'
import Arrow from '../assets/keyboard_arrow_right_24dp_FFFFFF_FILL0_wght700_GRAD0_opsz24.svg?react'
import { useNavigate} from 'react-router-dom'
import type { topColPropsType,animeListType } from '../types/anime'
import LoadingColCard from './LoadingColCard'
const Topcol = ({obj,props,loading}:{obj:animeListType[],props:topColPropsType,loading:boolean} ) => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate(`/top?${props.sort=='' ? '' : 'sort='+props.sort+'&'}${props.format=='' ? '' : 'format='+props.format+'&'}${props.status=='' ? '' :'status='+props.status+'&'}perPage=30&page=1`)
  }
  
  return (
    <div className='flex-col'>
      <p className='sm:text-2xl  text-lg font-semibold text-yellow-200 pb-5 min-w-0 truncate '>{props.title}</p>
      <div>
        {
           (loading || !obj) ? Array.from({length:4}).map((_,i)=>
          <LoadingColCard key={i}/>
          )
        
      :
         obj?.map((el:any,i:number)=>{
            return(
             i<4 &&   <Colcard obj={el} key={i} />
          )
        })
      }
     </div>
     <div className='flex py-4 font-light sm:text-base text-sm items-center gap-1 hover:text-yellow-300 group cursor-pointer'>
        <button onClick={handleClick} className='cursor-pointer'>View more</button>
      
       
      <Arrow className=' px-1 pt-0.5 group-hover:fill-yellow-300'/>
     </div>
      
    </div>
    
  )
}

export default Topcol
