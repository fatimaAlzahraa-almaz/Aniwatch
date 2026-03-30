
const Footer = () => {
  return (
    <footer className='flex   items-center justify-center w-full h-[15rem] text-gray-400 bg-gray-900 gap-1 flex-wrap min-w-0 truncate '>
      <span className='fill-white '>&copy;</span>
      <p>{new Date().getFullYear()}</p>
      <p >All rights are reserved</p>
    </footer>
  )
}

export default Footer
