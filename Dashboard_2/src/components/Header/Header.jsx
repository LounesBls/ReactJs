import React from 'react';
import { FaRegBell } from "react-icons/fa6";

function Header() {
    return (
        <header className='flex flex-wrap lg:flex-nowrap justify-between items-center bg-gray-300 px-4'>
            <div className='flex lg:block items-center gap-4'>
                <small className='text-nowrap text-lg font-semibold'>wellcome back!</small>
                <h2 className='text-2xl font-bold'>Iyad</h2>
            </div>

            <nav className='w-full md:w-fit flex items-center justify-between'>
                <input type="search" placeholder='Search...' className='grow-[2] shrink rounded-md px-4 h-10 focus:outline-0 focus:ring-2 focus:indigo-600'/>
                <FaRegBell size={32} strokeWidth={3} />
                <img src="/src/assets/me.png" alt="my picture" className='w-12 h-12 rounded-full' />
            </nav>
        </header>
    )
}

export default Header