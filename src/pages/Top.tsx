import Card from "../components/Card"
import {useSearchParams } from "react-router-dom"
import Pagination from "../components/Pagination"
import Genre from "../components/Genre"
import Top10 from "../components/Top10"
import { useAnime } from "../api/aniListApi"
import LoadingCard from "../components/LoadingCard"
import { useEffect } from "react"
const Top = () => {


  const[searchParams]=useSearchParams();
  const sort:string|null=searchParams.get('sort');
  const format:string|null=searchParams.get('format');
  const page=Number(searchParams.get('page'));
  const status:string|null=searchParams.get('status');
  const genre:string|null=searchParams.get('genre');
  const perPage:number|null=searchParams.get('perPage') ? Number(searchParams.get('perPage')) : null;
  const que=searchParams.get('q');
  const{data,isLoading}=useAnime({sort,page,format,status,genre,perPage,search:que});
  useEffect(()=>{
   window.scrollTo(0,0);
  },[sort,format,page,status,genre,perPage,que])

 
  return (
    <div className="mt-16 p-2 w-full flex">
      <div className="min-[1200px]:flex w-full"> 
    <div className="flex flex-col gap-4 w-full ">
     <div className="grid grid-cols-2 min-[480px]:grid-cols-3  min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[1380px]:grid-cols-6 gap-4  w-full ">
      {
        (isLoading || !data) ? Array.from({length:30}).map(()=>
        <LoadingCard/>
        )
      
      :

        data?.Page.media?.map((el:any,i:number)=>{
          return(
            <Card obj={el} key={i} />
          )
        })
      }
    </div>
     <Pagination maxPage={data?.Page.pageInfo.lastPage}/>
    </div>
    <div className="flex-col ">
      <Genre/>
      <Top10/>
    </div>
    </div>
     
    
    </div>
    
  )
}

export default Top
