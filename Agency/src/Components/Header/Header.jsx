import React, { useEffect, useRef } from 'react'

function Header({theme, toggleTheme}) {
    const handleClick = () => {
        const header = document.querySelector('header');
        const smallNav = document.querySelector('.sNav');
        header.classList.toggle('overflow-hidden')
        smallNav.classList.toggle('-right-full');
    };

    const navLinks = [
        {
            id: 1,
            href: '#home',
            display: 'home'
        },
        {
            id: 2,
            href: '#about',
            display: 'about'
        },
        {
            id: 3,
            href: '#services',
            display: 'services'
        },
        {
            id: 4,
            href: '#projects',
            display: 'projects'
        },
        {
            id: 5,
            href: '#blog',
            display: 'blog'
        },
    ]

    const headerRef = useRef(null);

    const scroll = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('!fixed', 'w-full', 'z-10', 'bg-light-nav','dark:bg-dark-nav', 'transition-all', 'duration-300', 'ease-linear');
        }else {
            headerRef.current.classList.remove('!fixed', 'w-full', 'z-10', 'bg-light-nav','dark:bg-dark-nav', 'transition-all', 'duration-300', 'ease-linear');
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', scroll);
        return () => removeEventListener('scroll', scroll);
    },[]);

    return (
        <header className='px-4 relative overflow-hidden' ref={headerRef}>
            <div className="container flex flex-wrap lg:flex-nowrap items-centre justify-between py-4 mx-auto">
                <h2 className="logo text-dark-primaryClr text-2xl font-bold capitalize">digency</h2>

                {/* Nav > 1024px*/}
                <nav className='hidden lg:flex items-center justify-around gap-12 w-8/12'>
                    <ul className='flex items-center gap-6'>
                        
                        {
                            navLinks.map(item => <li key={item.id}><a href={item.href} className='capitalize dark:text-dark-headings-linksClr font-medium text-lg hover:text-light-primary-countSectBg-btnPrimaryClr dark:hover:text-dark-btnPrimaryBg-linkActiveClr' >{item.display}</a></li>)
                        }
                    </ul>

                    <div className='flex items-center' onClick={toggleTheme} >
                        {
                            !theme 
                            ?
                                <span className='group flex items-center gap-1 capitalize cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"  className='duration-300 group-hover:rotate-[350deg] group-hover:duration-300'>
                                        <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
                                    </svg>
                                    dark
                                </span>
                            
                            :
                                <span className='group flex items-center gap-1 capitalize cursor-pointer text-[#fff]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className='duration-300 group-hover:rotate-45 group-hover:duration-300'>
                                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                                    </svg>
                                    light
                                </span>
                        }
                    </div>
                </nav>

                {/* Nav < 1024 */}
                <nav className='sNav absolute z-10 top-12 right-0 -right-full h-[calc(100vh-64px)] pt-8 w-full xsm:w-8/12 sm:w-5/12 md:8/12 lg:hidden flex flex-col items-center gap-6 bg-gradient-to-l from-light-newsLetterBgOne via-light-newsLetterBgTwo to-light-newsLetterBgThree dark:from-dark-cardBgOne dark:via-dark-cardBgTwo dark:to-dark-cardBgThree px-2 mt-4  transition-all duration-300 ease-linear'
                    onClick={()=>{document.querySelector('header').classList.toggle('overflow-hidden'), document.querySelector('.sNav').classList.toggle('-right-full')}}
                >
                    <ul className='relative z-50 flex items-start flex-col gap-6'>
                        {
                            navLinks.map(item => <li key={item.id}><a href={item.href} className='capitalize dark:text-dark-headings-linksClr font-medium text-lg hover:text-light-primary-countSectBg-btnPrimaryClr dark:hover:text-dark-btnPrimaryBg-linkActiveClr' >{item.display}</a></li>)
                        }
                    </ul>

                    <div className='flex items-center gap-1' onClick={toggleTheme} >
                        {
                            !theme 
                            ?
                                <span className='flex items-center gap-2 capitalize font-semibold text-lg cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                                        <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
                                    </svg>
                                    dark
                                </span>
                            
                            :
                                <span className='flex items-center gap-2 capitalize font-semibold text-lg cursor-pointer dark:text-[#fff]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className='duration-300 group-hover:rotate-45 group-hover:duration-300'>
                                        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                                    </svg>
                                    light
                                </span>
                        }
                    </div>
                </nav>
                
                {/* bats svg */}
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512" className='lg:hidden cursor-pointer dark:fill-[#fff]' onClick={handleClick}>
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            </div>
        </header>
    )
}

export default Header;