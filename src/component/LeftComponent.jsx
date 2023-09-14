import React, { Component } from 'react'

export default function LeftComponent(){
  
    return (
      <div className=' w-28 h-screen'>
        <div className=' h-28 w-full flex items-center justify-center'>
            <img className='w-8 h-8' src={require('../Images/category_icon.png')} alt="" />
        </div>
        <div className=' w-full h-2/6 flex flex-col  items-center'>
            <div className='m-7'>
            <img className='w-8 h-8' src={require('../Images/cube.png')} alt="" />
            </div>
            <div className='m-5'>
              <img className='w-8 h-8' src={require('../Images/list.png')} alt="" />
            </div>
            <div className='m-5'>
              <img className='w-8 h-8' src={require('../Images/messenger.png')} alt="" />
            </div>
            <div className='m-5'>
              <img className='w-8 h-8' src={require('../Images/list.png')} alt="" />
            </div>
        </div>
        <div className=' w-full h-1/5 flex flex-col items-center mt-1'>
            <div className='m-4'>
              <img className='w-8 h-8' src={require('../Images/success.png')} alt="" />
            </div>
            <div className='m-3'>
              <img className='w-8 h-8' src={require('../Images/security.png')} alt="" />
            </div>
            <div className='m-3'>
              <img className='w-8 h-8' src={require('../Images/users.png')} alt="" />
            </div>
        </div>
        <div className=' w-full h-2/6 flex flex-col items-center mt-2'>
            <div className='m-5'>
              <img className='w-8 h-8 rounded-full' src={require('../Images/lachlan.jpg')} alt="" />
            </div>
            <div className='m-5'>
              <img className='w-8 h-8 rounded-full' src={require('../Images/christina.jpg')} alt="" />
            </div>
            <div className='m-5'>
              <img className='w-8 h-8 rounded-full' src={require('../Images/nonamesontheway.jpg')} alt="" />
            </div>
            <div className='m-5'>
              <img className='w-8 h-8' src={require('../Images/plus.png')} alt="" />
            </div>
        </div>
      </div>
    )
  
}

