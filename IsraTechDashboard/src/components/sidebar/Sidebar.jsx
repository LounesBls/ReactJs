import React, { useEffect } from 'react';
import sideBarQuickMenu from './sideBarQuickMenu';
import sideBarSettings from './sideBarSettings';
import { NavLink, Link } from 'react-router-dom';

function Sidebar() {
    useEffect(()=>{
        document.querySelectorAll('.sideList li').forEach((li) => {
            li.addEventListener('click', ()=>{
                document.querySelectorAll('.w-fit li').forEach((li)=> li.classList.remove('activeClr'));
                li.classList.toggle('activeClr');
            });
        });
    }, []);

    return (
        <aside className='bg-white pt-2 pb-4 px-2 md:px-8 !rounded-l-lg duration-300 transition-all ease-linear'>
            {/* Logo */}
            <Link to={'/'}>
                <div className='flex items-center'>
                    <img src="/src/assets/logo.jpg" alt="planti logo" className='w-16' />
                    <h2 className='hidden md:block text-3xl font-semibold text-green-600'>Planti</h2>
                </div>
            </Link>
            {/* Logo */}

                {/* Quick Menu */}
                <div className="quickMenu my-8 w-fit mx-auto">
                    <h2 className='hidden md:block text-xl font-semibold uppercase mb-4'>quick menu</h2>
                    <ul className='sideList w-fit'>
                        {
                            sideBarQuickMenu.map((menu)=>
                            
                                <NavLink to={menu.link} key={menu.id} className='block w-fit'>
                                    <li id={menu.id} className='group hover:text-green-600 flex w-fit md:w-[150px] gap-2 font-lg text-xl text-slate-400 opacity-80 capitalize my-3' >
                                        <span>{menu.svg}</span>
                                        <span className='hidden md:block'>{menu.name}</span>
                                        {/* <span>{menu.link}</span> */}
                                    </li>
                                </NavLink>
                            )
                        }
                    </ul>
                </div>
                {/* Quick Menu */}

                {/* Settings */}
                <div className="settings mb-4 w-fit mx-auto">
                    <h2 className='hidden md:block text-xl font-semibold uppercase mb-4'>Settings</h2>
                    <ul className='sideList w-fit'>
                        {
                            sideBarSettings.map((set)=>
                                <NavLink to={set.link} key={set.id} className='block w-fit'>
                                    <li key={set.id} id={set.id} className='group hover:text-green-600 flex w-fit md:w-[150px] gap-2 font-lg text-xl text-slate-400 opacity-80 capitalize my-3' >
                                        <span>{set.svg}</span>
                                        <span className='hidden md:block'>{set.name}</span>
                                    </li>
                                </NavLink>
                            )
                        }
                    </ul>
                </div>
                {/* Settings */}

        </aside>
    )
}

export default Sidebar