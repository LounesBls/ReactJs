import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header'
import Sidebar from './sidebar/Sidebar';

function Layouts() {
    return (
        <div className='flex gap-2 lg:shadow lg:shadow-lg  lg:rounded-lg'>
            <Sidebar />

            <main className='w-full bg-gray-200 py-4 px-4 lg:px-8 lg:rounded-r-lg'>
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Layouts