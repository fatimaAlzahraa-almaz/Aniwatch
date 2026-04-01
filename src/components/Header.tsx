
import Search from '../assets/search_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg?react'
import Menu from '../assets/menu_40dp_FFFFFF.svg?react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import {motion,AnimatePresence} from 'framer-motion'
const Header = () => {
   
  const[que,setQue]=useState<string>('');
  const[visibleMenu,setVisibleMenu]=useState(false);
  const [visibleForm,setVisibleForm]=useState(false);
  const navigate=useNavigate();
  const handleHomeSubmit=()=>{
    navigate('/');
    window.scrollTo(0,0);
  }
  const handleFormSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
   e.preventDefault();
   if(que.trim()){
    navigate(`/top?q=${que}&perPage=30&page=1`);
   }
   setQue('');
  }
  const handleHideFormSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
    handleFormSubmit(e);
    setVisibleForm(prev=>!prev);
    
  }
  const handleFavoritesClick=()=>{
    navigate('/favorites');
    window.scrollTo(0,0);
  }
   
  return (
    <header  className='fixed flex right-0 top-0 left-0 h-16 items-center justify-between  sm:text-xl font-semibold   bg-gray-900/95 z-100 sm:px-3 px-1 w-full'>
      <div className='flex items-center gap-1 sm:gap-2 w-full justify-between  sm:justify-start'>
        <Menu onClick={()=>{setVisibleMenu(prev=>!prev)}} className='w-8  cursor-pointer  pt-1 shrink-0'/>
        <div onClick={handleHomeSubmit} className='flex hover:cursor-pointer justify-center items-center '>
          <p className='relative text-xl sm:text-2xl'>
             <span className='text-amber-200'><span className=' text-2xl sm:text-3xl'>A</span>ni</span>watch
          </p>
        </div>
        <form onSubmit={handleFormSubmit} className=' hidden sm:flex   bg-gray-100  rounded-3xl items-center text-lg  text-black'>
        <input onChange={(e)=>setQue(e.target.value)} value={que}
      className='focus:outline-none w-[35vw] h-9  px-3  font-light required rounded-3xl ' type='text'  placeholder='Search..'/>
       <button className=' rounded-r-3xl  border-l-2 border-l-gray-500 px-1 h-7 ' type='submit'><Search className='active:bg-gray-200 hover:scale-105 hover:cursor-pointer  fill-black    rounded-3xl w-7 h-7 '/></button>
        </form>
          <button onClick={()=>setVisibleForm(prev=>!prev)} className='sm:hidden'><Search className='  rounded-lg fill-white  w-8 h-8 '/></button>
      </div>
       <div className=' hidden sm:flex text-lg gap-2 '>
        <button onClick={handleHomeSubmit} className='active:bg-gray-600  rounded-sm hover:text-yellow-200  hover:cursor-pointer '>Home</button>
        <button onClick={handleFavoritesClick} className=' hover:text-yellow-200  hover:cursor-pointer active:bg-gray-600 rounded-sm'>Favorites</button>
       </div>
      {
        visibleForm &&   <div onClick={()=>setVisibleForm(prev=>!prev)} className='fixed inset-0 '></div>
      }
      {
         visibleForm &&
         <AnimatePresence> 
        <motion.div
        initial={{y:'3rem',opacity:0}}
        animate={{y:'4rem',opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.1}}
        className='sm:hidden absolute top-0 w-full bg-black px-1 pb-2 left-0 right-0 '>
         
          <form onSubmit={handleHideFormSubmit} className='flex   bg-gray-100     rounded-3xl items-center  text-black'>
        <input onChange={(e)=>setQue(e.target.value)} value={que}
      className='focus:outline-none  h-8 px-2  font-light required rounded-3xl w-full' type='text'  placeholder='Search..'/>
       <button className=' rounded-r-3xl  border-l-2 border-l-gray-500 px-1  h-7 ' type='submit'><Search className=' active:bg-gray-200   fill-black    rounded-3xl w-7 h-7 '/></button>
        </form>
        </motion.div>
        </AnimatePresence>
         
      }  
        <HamburgerMenu visible={visibleMenu} setVisible={setVisibleMenu}/>
       
       
    </header>
  )
}

export default Header
