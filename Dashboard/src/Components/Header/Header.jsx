import React, { useEffect, useRef } from 'react';
import me from '../../assets/me.png';
import './header.css'

function Header() {
    const headerRef = useRef(null);

    const scroll = ()=> {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add("fixed");
        } else {
            headerRef.current.classList.remove("fixed");
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', scroll);
        return ()=> window.removeEventListener('scroll', scroll);
    },[]);

    const handelNav = () => {
        const sidbarContainer = document.querySelector('.saidBContainer');
        const header = document.querySelector('header');
        const FirstLi = document.querySelector('.firstLi');
        
        sidbarContainer.classList.toggle('activeSide');
        header.classList.toggle('activeNav');
        FirstLi.classList.toggle('flex');
        FirstLi.children[1].classList.toggle('hidden');
    }

    return <header className='absolute duration-300 right-0 w-[calc(100%-300px)] px-4 bg-white shadow-lg' ref={headerRef} >
        <div className="container mx-auto">
            <nav className="flex justify-between items-center py-2">
                {/* Bars SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 448 512" className='cursor-pointer' onClick={handelNav}>
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>

                {/* Input Search */}
                <div className='searchInput relative shadow-md rounded-full w-5/12'>
                    <input type="text" placeholder="Search..." className='rounded-full px-4 py-1 focus:outline-none' />
                    {/* Search SVH */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor" className='absolute top-0 right-2'>
                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                </div>

                <img src={me} alt="My Image" className='w-16 rounded-full'/>
            </nav>
        </div>
    </header>
}

export default Header