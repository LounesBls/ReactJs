import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <section>
            <div className='flex'>
                <Sidebar />

                <main className='w-[calc(100%_-_4rem)] md:w-[calc(100%_-_14rem)] relative left-[4rem] md:left-56 overflow-hidden'>
                {/* <main className='w-full ml-16 md:ml-56'> */}
                    <Header />
                    <Outlet />
                </main>
            </div>
        </section>
    )
}

export default Layout