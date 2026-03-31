
import {motion,AnimatePresence} from 'motion/react'
import Close from '../assets/close_40dp_FFFFFF.svg?react'
import Home from '../assets/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Fire from '../assets/local_fire_department_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Tv from '../assets/desktop_windows_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Movie from '../assets/movie_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Heart from '../assets/favorite_24dp_000000_FILL1_wght600_GRAD0_opsz24.svg?react'
import {useNavigate} from 'react-router-dom'
type HamburgerMenuProps={
  visible:boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const HamburgerMenu = ({visible,setVisible}:HamburgerMenuProps) => {
  const navigate=useNavigate();
  const hundleHomeclick=()=>{
    setVisible(prev=>!prev);
    navigate('/');
  }
  const handlePopularClick=()=>{
    setVisible(prev=>!prev);
    navigate('/top?sort=POPULARITY_DESC&status=FINISHED&perPage=30&page=1');
  }
  const handleTvClick=()=>{
    setVisible(prev=>!prev);
    navigate('/top?format=TV&sort=SCORE_DESC&perPage=30&page=1');
  }
  const handleMoviesClick=()=>{
   setVisible(prev=>!prev);
   navigate('/top?format=MOVIE&sort=SCORE_DESC&perPage=30&page=1')
  }
  const handleFavoritesClick=()=>{
    setVisible(prev=>!prev);
    navigate('/favorites')
  }
  return(
    <> 
   { visible && <div
      onClick={() => setVisible(false)}
      className="fixed inset-0 bg-black/50 z-40"
    />
   }
   <AnimatePresence> 
      {visible && <motion.div 
         initial={{ x: '-100%'}}
         animate={{x:0}}
         exit={{x:'-100%'}}
         transition={{duration:0.3,ease:'easeOut'}}
         className='absolute bg-gray-800/85   top-0 left-0 bottom-0 flex flex-col h-screen sm:w-80 w-60 font-medium sm:text-lg text-sm z-100'>
        <Close onClick={()=>setVisible(prev=>!prev)} className='sm:w-8 w-7 ml-auto mr-1 cursor-pointer'/>
         <button onClick={hundleHomeclick} className='p-3 border-t flex items-center gap-1 border-gray-500  w-full hover:text-yellow-300 cursor-pointer group'><Home className='fill-white group-hover:fill-yellow-300 w-5'/>Home</button>
             <button onClick={handlePopularClick} className='p-3 border-t border-gray-700 hover:text-yellow-300 w-full items-center gap-1 cursor-pointer group flex'><Fire className='fill-white w-5 group-hover:fill-yellow-300'/>Most Popular</button>
        <button onClick={handleTvClick} className='p-3 border-t border-gray-700 hover:text-yellow-300 w-full cursor-pointer  flex gap-1 items-center group'><Tv className='fill-white w-4 group-hover:fill-yellow-300'/>TV Series</button>
        <button onClick={handleMoviesClick} className='p-3 border-t border-b border-gray-700 hover:text-yellow-300 w-full cursor-pointer flex items-center gap-1 group'><Movie className='fill-white w-4 group-hover:fill-yellow-300'/>Movies</button>
        <button onClick={handleFavoritesClick} className='p-3 border-t border-b border-gray-700 hover:text-yellow-300 w-full cursor-pointer flex items-center gap-1 group '><Heart className='fill-white w-4 h-4  group-hover:fill-yellow-300 '/>Favorites</button>

       </motion.div>}
       </AnimatePresence>
       </>
  )
  
}

export default HamburgerMenu
