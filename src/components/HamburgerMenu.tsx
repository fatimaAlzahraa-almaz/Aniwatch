
import {motion,AnimatePresence} from 'motion/react'
import { useEffect } from 'react'
import Close from '../assets/close_40dp_FFFFFF.svg?react'
import Home from '../assets/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Fire from '../assets/local_fire_department_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Tv from '../assets/desktop_windows_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Movie from '../assets/movie_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg?react'
import Heart from '../assets/favorite_24dp_000000_FILL1_wght600_GRAD0_opsz24.svg?react'
import {useNavigate} from 'react-router-dom'
import type {HamburgerMenuProps} from '../types/anime'

const HamburgerMenu = ({visible,setVisible}:HamburgerMenuProps) => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(visible)
      document.body.style.overflow='hidden';
    else
      document.body.style.overflow='auto';
    return ()=>{
      document.body.style.overflow='auto';
    }
  },[visible])
  const handleHomeclick=()=>{
    setVisible(prev=>!prev);
    navigate('/');
    window.scrollTo(0,0);
  }
  const handlePopularClick=()=>{
    setVisible(prev=>!prev);
    navigate('/top?sort=POPULARITY_DESC&status=FINISHED&perPage=30&page=1',{state:{title:'Most Popular'}});
  }
  const handleTvClick=()=>{
    setVisible(prev=>!prev);
    navigate('/top?format=TV&sort=SCORE_DESC&perPage=30&page=1',{state:{title:'Tv Series'}});
  }
  const handleMoviesClick=()=>{
   setVisible(prev=>!prev);
   navigate('/top?format=MOVIE&sort=SCORE_DESC&perPage=30&page=1',{state:{title:'Movies'}})
  }
  const handleFavoritesClick=()=>{
    setVisible(prev=>!prev);
    navigate('/favorites')
    window.scroll(0,0);
  }
  return(
    <> 
   { visible && <div
      onClick={() =>setVisible(false)}
      className="fixed inset-0 bg-black/50 z-40"
    />
   }
   <AnimatePresence> 
      {visible && <motion.div 
         initial={{ x: '-100%'}}
         animate={{x:0}}
         exit={{x:'-100%'}}
         transition={{duration:0.3,ease:'easeOut'}}
         className='fixed bg-gray-800 backdrop-blur-2xl   top-0 left-0 bottom-0 flex flex-col  sm:w-1/4 w-[60%] font-medium sm:text-lg text-sm z-100 overflow-hidden'>
        <Close onClick={()=>setVisible(prev=>!prev)} className='sm:w-8 w-7 ml-auto mr-1 cursor-pointer'/>
         <button onClick={handleHomeclick} className='py-3 sm:px-2 px-1 border-t flex items-center gap-1 border-gray-700  w-full hover:text-yellow-300 cursor-pointer group  flex-wrap'><Home className='fill-white group-hover:fill-yellow-300 w-5'/>Home</button>
         <button onClick={handlePopularClick} className='py-3 sm:px-2 px-1 border-t border-gray-700 hover:text-yellow-300 w-full items-center gap-1 cursor-pointer group flex flex-wrap'><Fire className='fill-white w-5 group-hover:fill-yellow-300'/>Most Popular</button>
        <button onClick={handleTvClick} className='py-3 sm:px-2 px-1 border-t border-gray-700 hover:text-yellow-300 w-full cursor-pointer  flex gap-1 items-center group'><Tv className='fill-white w-4 group-hover:fill-yellow-300 flex-wrap'/>TV Series</button>
        <button onClick={handleMoviesClick} className='py-3 sm:px-2 px-1 border-t  border-gray-700 hover:text-yellow-300 w-full cursor-pointer flex items-center gap-1 group flex-wrap'><Movie className='fill-white w-4 group-hover:fill-yellow-300'/>Movies</button>
        <button onClick={handleFavoritesClick} className='py-3 sm:px-2 px-1 border-t border-b border-gray-700 hover:text-yellow-300 w-full cursor-pointer flex items-center gap-1 group flex-wrap'><Heart className='fill-white w-4  h-4 group-hover:fill-yellow-300 '/>Favorites</button>

       </motion.div>}
       </AnimatePresence>
       </>
  )
  
}

export default HamburgerMenu
