import Left from '../assets/arrow_back_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Right from '../assets/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react';
import { useSearchParams} from "react-router-dom";
const Pagination = ({maxPage=1}:{maxPage:number}) => {
  
  const[searchParams,setSearchParams]=useSearchParams();
  const genre=searchParams.get('genre');
  const format=searchParams.get('format');
  const page=Number(searchParams.get('page'));
  const sort=searchParams.get('sort');
  const q=searchParams.get('q');
  const status=searchParams.get('status');
  const updatePage=(page:number)=>{
  setSearchParams({format: format ??'',sort : sort ?? '',genre : genre ?? '',q:q??'',status:status??'',page :String(page),perPage:'30' });
  }
 
   const pagefunc=()=>{
  var pages=[];
  const start=Math.max(page-2,1);
  const end=Math.min(page+2,maxPage);
  for (var i=start;i<=end;i++){
    pages.push(i);
  }
  return pages;
  }
  
  return (
    <div className="flex w-full justify-center  sm:gap-2 gap-1 my-8 sm:font-semibold font-medium text-gray-300">
     
        <button onClick={()=>updatePage(Math.max(page-1,1))} disabled={page==1} className="bg-gray-700 sm:w-10 sm:h-10 w-8 h-8 text-center px-2 rounded-4xl cursor-pointer hover:bg-gray-600 active:bg-gray-800 sm:px-3 "><Left   className="p-1 fill-gray-300 hover:fill-yellow-300 "/></button>
      
       {pagefunc().map((p,i)=>{
          return(
             
           <button key={i} onClick={()=>updatePage(p)}  className={` ${p==page ?  'bg-yellow-300 text-black   ':'bg-gray-700   hover:text-yellow-300'} text-center  sm:w-10 sm:h-10 w-8 h-8  rounded-4xl cursor-pointer   active:bg-gray-800`} >{p}</button>
           
          )
        })
      }
       
        <button onClick={()=>updatePage(Math.min(page+1,maxPage))} disabled={page==maxPage}  className="bg-gray-700 sm:w-10 sm:h-10 w-8 h-8 text-center sm:px-2 px-1  rounded-4xl cursor-pointer hover:bg-gray-600 active:bg-gray-700 "><Right className="p-1 fill-gray-300 hover:fill-yellow-300 "  /></button>
         
      </div>
  )
}

export default Pagination