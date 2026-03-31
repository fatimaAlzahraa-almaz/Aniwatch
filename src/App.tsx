
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Top from './pages/Top'
import AnimeInfo from './pages/AnimeInfo'
import Favorites from './pages/Favorites'
function App() {
  
 
  return (
    <>
     
    <div className=''>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/top' element={<Top />}></Route>
        <Route path='/info' element={<AnimeInfo/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
      <Footer/>
      
       
    </div>
    
    </>
  )
}

export default App
