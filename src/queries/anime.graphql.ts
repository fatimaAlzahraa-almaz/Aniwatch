export const genreQuery = `
query {
  GenreCollection
}`;

export const animeInfoQuery = `query($id:Int){
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
}`;
export const animeListQuery = `query($sort:[MediaSort],$page:Int,$perPage:Int,$status:MediaStatus,$type:MediaType,$format:MediaFormat,$genre:String,$search:String){
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
