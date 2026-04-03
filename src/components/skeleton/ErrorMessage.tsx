import Gif from '../../assets/animation-boy.gif'
const ErrorMessage = ({refetch}:any) => {
  return (
    <div className="h-80 w-full flex flex-col items-center justify-center gap-4 bg-gray-800/50 ">
      <p className='text-red-400'>Something went wrong!</p>
      <button onClick={()=>refetch()} className='bg-gray-600 rounded-2xl px-3 py-1 cursor-pointer active:bg-gray-700'>Retry</button>
      <img className='w-36' src={Gif} alt='loading gif'/>
    </div>
  )
}

export default ErrorMessage;