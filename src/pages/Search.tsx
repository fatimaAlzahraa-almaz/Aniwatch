import Card from '../components/Card';
import { useSearchParams } from 'react-router-dom';
import { useAnime } from '../api/aniListApi';
const Search = () => {

  const[searchParams]=useSearchParams();
  const que=searchParams.get('q');
  const{data}=useAnime({perPage:30,search:que});
 
  return (
    <div className='p-2 mt-16 flex flex-col gap-y-4 '>
      <p className='text-lg '>{`Search results for: ${que}`}</p>
         <div className='grid grid-cols-2 min-[480px]:grid-cols-3  min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[1380px]:grid-cols-6     gap-4  w-full '>
      {
        data?.Page.media.map((el:any)=>{
          return(
            <Card obj={el}/>
          )
        })
      }
    </div>
    </div>
   
  )
}

export default Search
