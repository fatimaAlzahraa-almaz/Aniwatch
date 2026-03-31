import { useQuery } from "@tanstack/react-query";
import type { animeListPropsType  } from "../types/anime";

export const aniListApi='https://graphql.anilist.co';
const genreQuery=`
query {
  GenreCollection
}`;

const animeInfoQuery=`query($id:Int){
    Media(id:$id){
    id
    idMal
    title {
      romaji
      english
      native
    }
    type
    format
    status
    description(asHtml: false)
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    season
    seasonYear
    episodes
    duration
    coverImage {
      medium
      large
      extraLarge
    }
    trailer{
      id
      site
      thumbnail
    
    }
    bannerImage
    genres
    averageScore
    popularity
  }
}`
const animeListQuery=`query($sort:[MediaSort],$page:Int,$perPage:Int,$status:MediaStatus,$type:MediaType,$format:MediaFormat,$genre:String,$search:String){
            Page(page:$page,perPage:$perPage){
            pageInfo{
              hasNextPage
              lastPage
            }
   media(sort:$sort,status:$status,type:$type,format:$format,genre:$genre,search:$search,isAdult:false){
    id
    idMal
    title {
      romaji
      english
      native
    }
    type
    format
    status
    description(asHtml: false)
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    season
    seasonYear
    episodes
    duration
    coverImage {
      medium
      large
      extraLarge
    }
    trailer{
      id
      site
      thumbnail
    
    }
    bannerImage
    genres
    averageScore
    popularity
  }
}}`;


export const useAnime=( props:animeListPropsType={})=>{
   const{
     page=1,
     perPage=50,
     type='ANIME',
     ...filters
   }=props;
    
  return useQuery({
  queryKey:['animeList',page,perPage,{...filters}],
  queryFn:async()=>{
     
    const cleanFilters=Object.fromEntries(
      Object.entries(filters).filter(([_,v])=>v!==null && v!=='')
    );
    const variables={
      page,
      perPage,
      type,
      ...cleanFilters,
    };
    
 
    
   const res = await fetch(aniListApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: animeListQuery,
          variables:variables
         }),
      });

      const json = await res.json();
      return json.data;
   
  }
    ,
})
}
export const useAnimeInfo=({id}:{id:number})=>{
  return useQuery({
    queryKey:['animeInfo',String(id)],
    queryFn:async()=>{
        const res = await fetch(aniListApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: animeInfoQuery,
          variables:{
            id
          },
         }),
      });

      const json = await res.json();
      return json.data;
    }
  })
}
export const useGenre=()=>{
  return useQuery({
    queryKey:['genre'],
    queryFn:async()=>{
    
         const res = await fetch(aniListApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: genreQuery }),
      });

      const json = await res.json();
      return json.data;
    
    },
  
  })
}