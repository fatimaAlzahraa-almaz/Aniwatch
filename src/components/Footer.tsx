import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='flex flex-col  items-center justify-center w-full h-[15rem] text-gray-400 bg-gray-900 gap-4  '>
      <div className='flex gap-2 '>
        <a href='https://www.x.com' target='_blank'><FaTwitter className='h-5 w-5 cursor-pointer hover:scale-115'/></a>
        <a href='https://www.instagram.com' target='_blank'><FaInstagram  className='h-5 w-5 cursor-pointer hover:scale-115'/></a>
        <a  href='https://www.facebook.com' target='_blank'><FaFacebookF  className='h-5 w-5 cursor-pointer hover:scale-115'/></a>
      </div>
      <div className='flex gap-1 flex-wrap min-w-0 truncate'>
         <span className='fill-white '>&copy;</span>
         <p>{new Date().getFullYear()}</p>
         <p className='min-w-0 truncate'>All rights are reserved</p>
      </div>
       
    </footer>
  )
}

export default Footer
