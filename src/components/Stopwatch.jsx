import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
 import './timer.css'

function StopWatch() {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

useEffect(()=>{
  let intervalId;
  if(isActive){
    intervalId=setInterval(()=>setTime(time+1),10);
  }

  return ()=> clearInterval(intervalId)
},[isActive,time]);


const hours=Math.floor(time/360000)
const minutes=Math.floor((time % 360000) /6000)
const sec=Math.floor((time % 6000)/100)
const millisec= Math.floor(time % 100)

const startStop=()=>{
  setIsActive(!isActive);
  console.log(isActive)

}
// const timeElapsed=()=>{
//   let timeElaps;
//   let startTime=time;
//   endTime=performance.now();
//   timeElaps=startStop-endTime;
//   totalElapsed=Math.floor(timeElaps);
 
// }

const reset=()=>{
  setTime(0);
  console.log("Time reseted!")
}
  return (

    
    <div className="mx-auto  m-5  pt-4   w-1/3  pb-20
    flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500
    shadow-md boreder-2 border-white-900 
  rounded-lg  text-white   ">
    <div className='m-10  h-12  border-2 border-blue-300 sm:items-center 
    hover:from-pink-500 hover:to-yellow-500
     w-1/4 rounded-full text-center font-bold bg-gradient-to-r from-sky-500 to-indigo-500'>
      <Link to="/">
      <button className=' font-bold text-2xl'>Back</button>
      </Link>
      </div>
      <center><button 
     
      className='p-4  text-4xl sm:text-3xl border-2 mx-auto
       bg-gradient-to-r from-sky-500 to-indigo-500  
       rounded-lg border-blue-300 sm:mx-auto '>ANOMODORO
       </button></center>
      <div className='p-10  mt-20 border-2  justify-center
       border-2  bg-blue-950 border-gray-600 text-center mx-auto   rounded-lg '>
        <p className=' text-4xl font-bold  '>
          {hours}:{minutes.toString().padStart(2,"0")}:
          {sec.toString().padStart(2,"0")}:
          {millisec.toString().padStart(2, "0")}

        </p>
        
     
       
      </div>
      
      <div className="flex gap-4 mx-auto mt-20    " >
  
        <button
         className=" p-2 border-2 rounded-md
         bg-gradient-to-r from-sky-500 to-indigo-500 
         border-blue-300 w-48 font-bold text-3xl hover:from-pink-500 hover:to-yellow-500 mr-4"  
         onClick={startStop}>
          {isActive ? "Stop": "Start"}
        </button>
        <button
        className=' p-2 border-2 rounded-md
            bg-gradient-to-r from-sky-500 to-indigo-500 
            border-blue-300 w-48 font-bold text-3xl hover:from-pink-500 hover:to-yellow-500'
        onClick={reset}>
          Reset
        </button>
       
       
       
      </div>
     
    </div>

 
   
  )
}

export default StopWatch
