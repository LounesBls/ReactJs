import React from 'react';
import './side.css';
import links from './sideBarLinks';
import Dashboard from '../Dashboard/Dashboard';
import Customers from '../Customers/Customers';
import Messages from '../Messages/Messages';
import Help from '../Help/Help'
import Settings from '../Settings/Settings';
import Password from '../Password/Password';
import SignOut from '../SingOut/SignOut';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function SideBar() {

    const handelClick = () => {
        const lis = document.querySelectorAll('.ulDashboard li');

        lis.forEach(li=> {
            li.addEventListener('click', ()=>{
                lis.forEach(li => li.classList.remove('active'));
                li.classList.add('active');
            });
        })
    };      

    return <section className='sideBar relative w-full'>
        <div className="saidBContainer duration-300 container fixed top-0 w-[300px] h-full bg-primaryClr border border-0 border-l-[1rem] overflow-hidden border-primaryClr mx-auto">
        <Router >
        
            <ul className='ulDashboard absolute left-0 top-0 flex flex-col gap-6 w-full h-screen bg-primaryClr p-4 pe-0 overflow-hidden '>
                <li className='firstLi flex justify-between px-4 pe-8 mb-4'>
                    {/* Logo */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512" fill='white'>
                        <path d="M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 208-48 0c-53 0-96-43-96-96l0-6.1 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97 263c-9.4-9.4-24.6-9.4-33.9 0L7 319c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7 0 6.1c0 88.4 71.6 160 160 160l80 0 80 0c88.4 0 160-71.6 160-160l0-6.1 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-56-56c-9.4-9.4-24.6-9.4-33.9 0l-56 56c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l7-7 0 6.1c0 53-43 96-96 96l-48 0 0-208 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-10.9 0z"/>
                    </svg>

                    {/* Brand Name */}
                    <span className='text-white text-3xl font-bold'>Dashboard</span>
                </li>
                {
                    // Menu Items
                    links.map(link =>
                        
                            link.name == "Dashboard"
                            ? (
                                <li key={link.id} onClick={handelClick}
                                    className='active group relative w-full flex items-center gap-4 py-2 ps-4 ease-linear cursor-pointer hover:bg-white hover:rounded-l-full hover:transition-colors '>
                                    <span className='z-10'>{link.svg}</span>
                                    <Link to={link.path} className='w-full text-white text-2xl font-bold capitalize w-full ease-linear group-hover:text-primaryClr group-hover:duration-300 group-hover:transition-colors'>{link.name}</Link>
                                </li>
                            )
                            : (
                                <li key={link.id} onClick={handelClick}
                                    className='group relative w-full flex items-center gap-4 py-2 ps-4 ease-linear cursor-pointer hover:bg-white hover:rounded-l-full hover:transition-colors '>
                                    <span className='z-10'>{link.svg}</span>
                                    <Link to={link.path} className='w-full text-white text-2xl font-bold capitalize w-full ease-linear group-hover:text-primaryClr group-hover:duration-300 group-hover:transition-colors'>{link.name}</Link>
                                </li>
                            )
                        )
                }
            </ul>

                <Routes>
                    <Route path='Dashboard' element={<Dashboard />} className='active'></Route>
                    <Route path='Customers' element={<Customers />}></Route>
                    <Route path='Messages' element={<Messages />}></Route>
                    <Route path='Help' element={<Help />}></Route>
                    <Route path='Settings' element={<Settings />}></Route>
                    <Route path='Password' element={<Password />}></Route>
                    <Route path='SignOut' element={<SignOut />}></Route>
                </Routes>
        
        </Router>
        </div>

    </section>
}

export default SideBar