import Card from './Card'
import Arrow from '../assets/keyboard_arrow_right_24dp_FFFFFF_FILL0_wght700_GRAD0_opsz24.svg?react'
import {useNavigate} from 'react-router-dom'
import type {rowPropsType } from '../types/anime'
import LoadingCard from './LoadingCard'
const Row= ({obj,loading,genre,title,sort,status}:rowPropsType) => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/top?genre=${genre??''}&sort=${sort??''}&status=${status??''}&perPage=30&page=1`,{state:{title:title}});
  }
  return (
    <div className='flex flex-col  w-full p-2'>
      <div className='flex mb-4 justify-between items-center flex-wrap w-full'>
         <p className=' text-yellow-200 sm:text-2xl  text-lg font-semibold min-w-0 truncate '>{title}</p>
           
     
        <button onClick={handleClick} className=' text-gray-300 font-light sm:text-base text-sm    hover:text-yellow-300 group cursor-pointer    flex items-center'>View more <Arrow className=' px-1  pt-0.5 fill-gray-300 group-hover:fill-yellow-300'/></button>
      
     
      </div>

    <div className='grid grid-cols-2 min-[480px]:grid-cols-3  min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[1380px]:grid-cols-6     gap-4  w-full  '>
      {
        (loading||!obj) ? Array.from({length:12}).map((_,i)=>
        <LoadingCard key={i}/>
        )
      :
      obj?.map((el,i:number) =>{
        return(
          <Card obj={el} key={i} />
        )
})}
    </div>
    </div>
    
  )
}

export default Row