import { useQuery } from "@tanstack/react-query";
import type { animeListPropsType  } from "../types/anime";

export const aniListApi='/api-anilist';
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


export const useAnime=({sort,page=1,perPage=50,status,type='ANIME',format,genre,search}:animeListPropsType={})=>{
   
  return useQuery({
  queryKey:['animeList',page,sort,status,format,genre,search,perPage],
  queryFn:async()=>{
    const variables:any={};
    if(sort) variables.sort=[sort];
    if(status) variables.status=status;
    if(format) variables.format=format;
    if(page) variables.page=page;
    if(perPage) variables.perPage=perPage;
    if(type) variables.type=type;
    if(genre) variables.genre=genre;
    if(search) variables.search=search;
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