 
export interface topColPropsType{
  title:string,
  sort:string,
  format:string,
  status:string

}

export interface animeListPropsType{
  sort?:string|null,
  page?:number,
  perPage?:number|null,
  status?:string|null,
  type?:string|null,
  format?:string|null,
  genre?:string|null,
  search?:string|null,
}

export interface animeListType{
    id:number|null;
    idMal:number|null;
    title : {
      romaji:string|null;
      english :string|null; 
      native :string|null;
    }|null;
    type:string|null;
    format:string|null;
    status:string|null;
    description:string|null;
    startDate : {
      year :number|null;
      month :number|null;
      day:number | null;
    } |null;
    endDate : {
      year :number | null;
      month : number | null;
      day : number | null;
    } | null ;
    season:string|null,
    seasonYear:number|null,
    episodes:number|null,
    duration:number|null,
    coverImage : {
      medium :string | null;
      large : string | null;
      extraLarge : string | null;
    } | null;
    trailer :{
      id : string | null;
      site : string | null;
      thumbnail :string | null;
    
    } | null;
    bannerImage:string|null,
    genres:string[]|null,
    averageScore:number|null,
    popularity:number|null
  }

export interface HamburgerMenuProps{
  visible:boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HoverBoxPropsType{
obj:animeListType,
setBoxHover:(boxHover:boolean)=>void
}

export interface rowPropsType{
obj:animeListType[]|null,
loading:boolean,
genre?:string|undefined,
title:string,sort:string,
status:string
}
