import { useState ,useEffect} from 'react'
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
  <section id='stopwatch'>
    
    <div className="mx-auto  sticky top-10 w-1/3   flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500
  pt-20 pb-20 mt-20 shadow-md boreder-2 border-white-900 rounded-lg  text-white ">
      <center><button 
     
      className='p-4 text-4xl sm:text-3xl border-2 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500  rounded-lg border-blue-300 sm:w-1/2 '>ANOMODORO
       </button></center>
      <div className='p-10  mt-40 border-2  justify-center border-2  bg-blue-950 border-gray-600 text-center mx-auto   rounded-lg '>
        <p className=' text-4xl font-bold  '>
          {hours}:{minutes.toString().padStart(2,"0")}:
          {sec.toString().padStart(2,"0")}:
          {millisec.toString().padStart(2, "0")}

        </p>
        
     
       
      </div>
      
      <div className="ml-30 mt-20  pb-10  mx-auto sm:flex-col   sm:items-center" >
  
        <button
         className="p-4 mr-10 w-10 border-2 sm:mb-10 rounded-md   bg-gradient-to-r from-sky-500 to-indigo-500 border-blue-300 w-48 font-bold text-3xl hover:bg-violet-950"  
         onClick={startStop}>
          {isActive ? "Stop": "Start"}
        </button>
        <button
        className='p-4 w-10 border-2 rounded-md    bg-gradient-to-r from-sky-500 to-indigo-500 border-blue-300 w-48 font-bold text-3xl hover:bg-gray-900'
        onClick={reset}>
          Reset
        </button>
       
       
       
      </div>
     
    </div>

  </section>
   
  )
}

export default StopWatch
