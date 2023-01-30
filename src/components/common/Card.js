import React from 'react'
import vs from '../../resources/vs.png'

export default function Card() {
  return (
    <div className='w-56 rounded-md overflow-hidden shadow-lg shadow-slate-700 m-4 cursor-pointer'>
      <div className='flex justify-around items-center relative'>
        <img className='w-28 h-32 object-cover rounded-sm mr-1' src='https://cdorg.b-cdn.net/flags/generic/IN.svg' alt='flag' ></img>
        <img className='z-10 absolute' src={vs} alt="vs"></img>
        <img className='w-28 h-32 object-cover rounded-sm ml-1' src='https://cdorg.b-cdn.net/flags/generic/NZ.svg' alt='flag' ></img>
      </div>
      <div className='w-full text-center text-xl font-mono'>New Zealand Tour of India</div>

    </div>
  )
}
