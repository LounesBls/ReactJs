import React from 'react';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

function Layouts(props) {
    const takeId = (id) => props.getId(id);
    return (
        <main>

            <Header />
            <div className='flex px-8 py-4  '>
                {/* Passed takeId function */}
                <SideBar takeId={takeId} />
                <section className='px-4 py-4 bg-gray-300 w-full'>
                    <Outlet />
                </section>
            </div>
        </main>
    )
}

export default Layouts