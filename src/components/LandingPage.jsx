import React from 'react'
import {VscArrowRight} from 'react-icons/vsc'
import { Link, Router } from 'react-router-dom'
const LandingPage = () => {
  return (

    
<div className='mx-auto  m-5 mb-5  w-1/3  pb-10  
    flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500  
    text-gradient-to-r from-sky-500 to-indigo-500 
     shadow-md boreder-2 border-white-900 
  rounded-lg  text-white  ' >
        <div className='justify-center  items-center p-10 '>
            <h1 className='text-4xl font-bold justify-content text-center mb-10 text-yellow-500'>
              Track and Analyze Your Sleep Pattern
              </h1>
            <p className='justify-content text-3xl font-semibold text-center'>Track sleep efficiency by measuring your movement through the night</p>

        </div>
        <div className='justify-center  items-center mx-auto '>
            <img
            className='justify-center items-center border-none rounded-md object-fit'
            src="/static/images/stopwatch.png" alt="" />
        </div>

        <div className='h-12 w-1/2 hover:from-pink-500 hover:to-yellow-500 cursor-pointer mt-20
           items-center mx-auto  
          bg-gradient-to-r from-indigo-500 to-sky-500 border-blue-300  border-2 rounded-full'>
        <Link to="/stopwatch" className="text-center font-bold text-2xl w-full">
                   <h3>NEXT</h3>

        </Link>
        </div>
    </div>

   
  )
}

export default LandingPage