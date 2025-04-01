import React from 'react'
import { RiHome6Line } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <div className='bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full'>
        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center '>
            Logo
        </h1>
        <ul className='bg-green-500 pl-4'>
            <li className='p-4 bg-red-300'>
                <a href="#" className='bg-blue-500'> <RiHome6Line /> </a>
            </li>
        </ul>
    </div>
  )
}
