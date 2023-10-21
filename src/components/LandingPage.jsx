import React from 'react'
import { Router } from 'react-router-dom'
const LandingPage = () => {
  return (
<section id='Landing'>
    
<div className='bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col mx-auto w-1/2 h-screen text-white border-2 rounded-lg border-blue-500 shadow-lg' >
        <div className='justify-center  items-center p-20 '>
            <h1 className='text-4xl font-bold justify-content text-center mb-10'>Track and Analyze Your Sleep Pattern</h1>
            <p className='justify-content text-2xl font-semibold text-center'>Track sleep efficiency by measuring your movement through the night</p>

        </div>
        <div className='justify-center  items-center mx-auto  mb-20'>
            <img
            className='justify-center items-center border-none rounded-md object-fit'
            src="src/assets/stopwatch.png" alt="" />
        </div>

        <div className='h-12 w-1/2 hover:bg-slate-900 cursor-pointer  text-center  text-gray-900 font-bold    items-center mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 border-blue-300  border-2 rounded-full'>
        <a href="#stopwatch" className="text-center text-xl">
                    Set Your Watch

        </a>
        </div>
    </div>

</section>
   
  )
}

export default LandingPage