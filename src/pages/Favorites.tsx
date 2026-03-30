import { useFavorite } from "./store/favoritesStore"
import Card from "../components/Card";
const Favorites = () => {
  const{favoritesList}=useFavorite();
  return (
    <div className="mt-16 p-2 flex flex-col w-full gap-y-4 ">
      <p className="text-xl font-medium text-yellow-300">My List</p>
       <div className="grid grid-cols-2 min-[480px]:grid-cols-3  min-[640px]:grid-cols-3 min-[768px]:grid-cols-4 min-[1380px]:grid-cols-6 gap-4  w-full ">
       {
        favoritesList.map((el,i)=>
      <Card obj={el} key={i}/>
      )
      }
       </div>
    
      
    </div>
  )
}

export default Favorites