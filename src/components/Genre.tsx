import { useNavigate } from "react-router-dom";
import { useGenre } from "../api/aniListApi";
const Genre = () => {
  const{data,isLoading}=useGenre();
  const navigate=useNavigate();
  const handleToPageClick=(genre:string)=>{
   navigate('/top?genre='+genre+'&sort=SCORE_DESC&perPage=30&page=1');
  }
  

  return (
    <div className=" w-full min-w-0 sm:min-w-[16rem] p-2">
     <p className="text-lg sm:font-bold font-medium pb-4 min-w-0 truncate ">Genres</p>
     
    <div  className=" bg-gray-800  grid grid-cols-3 backdrop-blur-2xl  justify-items-center p-4 sm:p-2">
          
         { (isLoading || !data) ?  Array.from({length:18}).map((_,i)=>
         <button   key={i} className='  max-w-[10ch] truncate  w-[95%] h-7 bg-gray-700 m-1  rounded-2xl'  ></button>
         )
           
         :
        data?.GenreCollection.map((el:any,i:number)=>{
          return(
            el!='Hentai' && 
             <button onClick={()=>handleToPageClick(el)}  key={i} className={`${i%5==0 ? i%4==0 ?'text-blue-200' :'text-yellow-200':    i%3==0 ? 'text-green-200' : 'text-purple-200'} cursor-pointer  line-clamp-1 truncate hover:bg-gray-700 sm:p-2  p-1 w-full`  }>{el}</button>
           )
        })
      }
       
      
    </div>
    </div>
  )
}

export default Genre
