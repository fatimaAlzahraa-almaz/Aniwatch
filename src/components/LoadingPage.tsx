import {motion} from 'framer-motion'

const LoadingPage = () => {
  return (
     <div className='mt-16 bg-gray-900 w-screen h-[80vh] flex flex-col items-center justify-center gap-7'>
  <div className='flex gap-1  p-4'>
    {
      Array.from({length:4}).map((_,i)=>{
        return(
          <motion.div
          key={i}
          initial={{y:0}}
          animate={{y:[0,-10,0], scale:[1,1.1,1]}}
          transition={{delay:i*0.1,duration:0.6,repeat:Infinity, repeatType:'reverse',ease:'easeInOut'}}
          className=' w-4 h-4 bg-yellow-300 rounded-full'></motion.div>
        )
      })
    }
  </div>
   </div>
  )
}

export default LoadingPage
