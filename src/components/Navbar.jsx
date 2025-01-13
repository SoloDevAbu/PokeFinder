import React from 'react'
import logo from '../assets/pokeball.png'

const Navbar = () => {
    return (
        <div className='flex justify-between px-4 py-1 border-b-2 border-b-gray-500 items-center'>
            <img src={logo} alt="" className='size-10 md:size-12' />
            <a className='bg-slate-600 text-white font-sans font-bold px-4 py-2 rounded-lg hover:bg-slate-700'
                href="https://solodevabu.vercel.app/"
                target="_blank" rel="noopener noreferrer">About Me</a>
        </div>
    )
}

export default Navbar