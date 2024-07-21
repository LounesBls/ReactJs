import React, { useState, useEffect } from 'react';
import herolinks from './herolinks';

export default function Header({selectedItems, removeItem}) {
    // get Item from[menu's sections] Home Page.
    const [basketItems, setBasketItems] = useState(selectedItems);
    console.log(basketItems)

    useEffect(() => {
        setBasketItems(selectedItems);
    }, [selectedItems]);

    // Handle Bars
    const handleNav = () => {
        const bars = document.querySelector('.bars');
        bars.classList.toggle('hidden');
        bars.classList.toggle('absolute');
        bars.classList.add('!right-0');
        bars.classList.add('wow', 'slideInRight');
    }

    // Handle Basket Container.
    const handleClick = () => {
        // Basket Container.
        const baskContainer = document.querySelector('.bask-container');
        basketItems.length > 0 ? baskContainer.classList.toggle('hidden'): baskContainer.classList.add('hidden');
    }

    // Remove Items from Basket.
    const handleXClick =(id, type) => {
        const xMark = document.querySelectorAll('.child_card .xMark');
        xMark.forEach((mark)=> {
            mark.addEventListener('click', (e)=> e.target.closest('.child_card').remove());
        });

        setBasketItems(prevItems => prevItems.filter(item => !(item.id === id && item.type === type)));
        removeItem(id, type);

        console.log(basketItems)
    };

    return (
        <header className='fixed z-10 w-full bg-secondary_clr py-4 scroll-pt-2 snap-start'>
            <div className="container mx-auto px-4 relative">

                    {/* Nav Header */}
                    <nav className='flex items-center justify-between'>
                        <div className="logo flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)">
                                <path d="M4.22235 3.80753L10.9399 10.525L8.11144 13.3535L4.22235 9.46438C2.66026 7.90229 2.66026 5.36963 4.22235 3.80753ZM14.2683 12.1464L13.4147 12.9999L20.4858 20.071L19.0716 21.4852L12.0005 14.4141L4.92946 21.4852L3.51525 20.071L12.854 10.7322C12.2664 9.27525 12.8738 7.1769 14.4754 5.5753C16.428 3.62268 19.119 3.1478 20.4858 4.51464C21.8526 5.88147 21.3778 8.57242 19.4251 10.525C17.8235 12.1267 15.7252 12.7341 14.2683 12.1464Z"></path>
                            </svg>
                            <h1 className='font-semibold text-2xl capitalize text-primary_clr'>snacks food</h1>
                        </div>

                        <div className='flex items-center gap-6 lg:gap-8 xl:gap-20'>
                            <div onClick={handleNav} className='bars flex items-center lg:justify-between flex-col lg:flex-row gap-8 lg:gap-4 pt-8 lg:pt-0 hidden lg:inline-flex top-0 -right-72 bg-secondary_clr lg:bg-inherit h-screen lg:h-fit duration-300'> 
                                <ul className="links  flex items-center flex-col lg:flex-row md:gap-4 lg:gap-4">
                                    {
                                        herolinks.map((link, index) => <li key={index}><a href={link.href} className='capitalize text-white hover:text-primary_clr hover:duration-300'>{link.title}</a></li>)
                                    }
                                </ul>

                                {/* Input */}
                                <div className="search_Input group flex items-center mx-2">
                                    <input type="search" placeholder='Search Your Food...' className='bg-body_clr rounded-l-full px-4 group-hover:border-white-600 group-hover:border-2 group-hover:py-1'/>
                                    {/* Search SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)" className='w-10 h-6 bg-body_clr rounded-r-full pe-4 group-hover:border-white-600 group-hover:border-2 group-hover:h-9 '>
                                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Basket SVG */}
                            {/* Addd id for each item and add validation for adding items. */}
                            <div className="basket p-2 rounded-lg bg-btn_clr cursor-pointer" onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)" >
                                    <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                                </svg>
                            </div>


                            {/* Bars SVG */}
                            <span className='lg:hidden duration-300 cursor-pointer' onClick={handleNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512">
                                    <path fill="#F76E11" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                        </div>
                    </nav>

                    {/* Item Container */}
                    <div className="bask-container hidden flex items-center flex-wrap gap-4 bg-body_clr absolute top-14 left-0 w-full p-4">
                    {
                        // Use a Set to keep track of unique items
                        [...new Map(basketItems.map(item => [`${item.id}-${item.type}`, item])).values()]
                            .map((item) =>
                            
                                <div id={item.id} data-type={item.type} key={item.id} className='child_card 
                                        bg-secondary_clr relative flex flex-col justify-between items-normal 
                                        sm:gap-4 px-4 sm:p-4 rounded-lg w-full sm:w-56 h-56' >
                                    <img src={item.imgUrl} alt={item.alt} className='w-64 mx-auto' />

                                    <span className='xMark absolute top-1 right-1 hover:cursor-pointer' onClick={() => handleXClick(item.id, item.type)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512" className='bg-[#fffc] rounded-full'>
                                            <path fill="#f61313" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                                        </svg>
                                    </span>

                                    <article className='flex items-center justify-between pb-4 sm:pb-0' >
                                        <h2 className='text-primary_clr text-lg font-bold capitalize py-1'> 
                                                {item.title}</h2>
                                        <p className='text-p_clr text-lg capitalize'>price:$<span 
                                                className='text-primary_clr text-lg'>{item.price}</span></p>
                                    </article>
                                </div>
                            )
                    }
                </div>
            </div>
        </header>
    )
};
