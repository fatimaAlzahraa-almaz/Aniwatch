import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";
import type { animeListType } from "../../types/anime";
type favoritesStoreType={
  favoritesList:any[],
  toggleFavorites:(el:animeListType)=>void,
}


export const useFavorite=create<favoritesStoreType>()(
  persist(
    (set,get)=>({
      favoritesList:[],
      toggleFavorites:(el)=>{
        const{favoritesList}=get();
        const isExist=favoritesList.some((item)=>item.id===el.id);
        if(isExist){
          set({favoritesList:favoritesList.filter((item)=>item.id!==el.id)});
        }else{
          set({favoritesList:[...favoritesList,el]});
        }
      }
     }),{
      name:'favorites',
      storage:createJSONStorage(()=>localStorage),
    }))