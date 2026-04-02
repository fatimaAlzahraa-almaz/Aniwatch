import Topcol from "./Topcol"
import { useAnime } from "../api/aniListApi"
import type { topColPropsType } from "../types/anime"

const Colsec = () => {
   const topAiring=useAnime({sort:'SCORE_DESC',perPage:4,status:'RELEASING'});
   const mostPopular=useAnime({sort:'POPULARITY_DESC',perPage:4});
   const upcoming=useAnime({sort:'SCORE_DESC',status:'NOT_YET_RELEASED',perPage:4});
   const topMovies=useAnime({sort:'SCORE_DESC',format:'MOVIE',perPage:4});
  const props:topColPropsType[]=[{
    title:'Top Airing',
    sort:'SCORE_DESC',
    format:'',
    status:'RELEASING'
  },
  {
    title:'Most Popular',
    sort:'POPULARITY_DESC',
    format:'',
    status:''
  },
  {
    title:'Upcoming',
    sort:'',
    format:'',
    status:'NOT_YET_RELEASED'
  },
  {
    title:'Top Movies',
    sort:'SCORE_DESC',
    format:'MOVIE',
    status:''
  }
]
  
 
  return (
    <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4    w-full p-2 bg-gray-800/70">
      {
        [topAiring,mostPopular,upcoming,topMovies].map((el:any,i:number)=>{
          return(
            <Topcol obj={el.data?.Page?.media} key={i} props={props[i]} loading={el.isLoading}/>
          )
        })
      }
      
    </div>
  )
}

export default Colsec
