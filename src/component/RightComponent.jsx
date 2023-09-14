import React, { Component } from 'react'

export default function RightComponent() {
  
    return (
      <div className='h-screen w-1/4 bg-right-img  bg-cover bg-no-repeat bg-center'>
        <div>
          
          <div className='flex flex-row ml-64 mt-28'>
            <div>
              <img className='w-10 h-10 rounded-full' src={require('../Images/notification.png')} alt="" />
            </div>
            <div className='ml-5'>
              <img className='w-10 h-10 rounded-full' src={require('../Images/comment.png')} alt="" />
            </div>
            <div className='ml-5'>
              <img className='w-10 h-10 rounded-full' src={require('../Images/lachlan.jpg')} alt="" />
            </div>
          </div>
          <div className='mt-10 ml-52'>
            <h2 className='bg-sky-500 inline-block pt-1 pb-1 pl-3 pr-3 rounded-full text-white font-bold capitalize'>My Amazing Trip</h2>
          </div>
        </div>
        <div className='mt-10'>
          <h1 className='text-4xl text-left ml-5 text-white leading-none'>I Like laying down on the sand and looking at the moon.</h1>
        </div>
        <div className='text-left mt-12'>
          <div className='ml-8 text-xl font-bold text-white'>
            <p className=' capitalize'>27 people going to this trip</p>
          </div>
          <div className='flex flex-row ml-11 mt-6'>
            <div>
               <img className='w-14 h-14 rounded-full border-4 border-yellow-600' src={require('../Images/lachlan.jpg')} alt="" />
            </div>
            <div className='ml-5'>
                <img className='w-14 h-14 rounded-full border-4 border-blue-600' src={require('../Images/christina.jpg')} alt="" />
            </div>
            <div className='ml-5'>
                <img className='w-14 h-14 rounded-full border-4 border-red-600' src={require('../Images/nonamesontheway.jpg')} alt="" />
            </div>
            <div className='ml-5'>
               <img className='w-14 h-14 rounded-full border-4' src={require('../Images/raamin.jpg')} alt="" />
            </div>
            <div className='ml-5  text-center leading-loose	flex justify-center items-center	'>
              <div className='w-14 h-14 rounded-full bg-yellow-600 border-4 border-green-600'>
               <p className='mt-2 text-yellow-100 font-bold '>18+</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
}
