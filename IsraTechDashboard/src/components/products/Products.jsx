import React from 'react';
import iOne from '/src/assets/team-2.jpg';
import iTwo from '/src/assets/team-7.jpg';
import iThree from '/src/assets/about-ex-share.jpg';
import iFour from '/src/assets/team-8.jpg';
import { Link } from 'react-router-dom';

function Products() {
    return (
        //  h-[calc(100vh-7.6rem)]
        <section className='flex flex-wrap flex-col lg:flex-row lg:flex-nowrap gap-4 my-4'>
            {/* Top Sellers */}
            <div id='topSeller' className='w-full lg:w-fit h-fit'>
                <h2 className='flex justify-between items-center font-medium text-base capitalize mb-2'>top Seller
                    <Link to='/products'>
                        <span className='flex justify-between gap-2 items-center px-2 py-1 opacity-40  rounded-md duration-300 hover:ring hover:ring-2 hover:ring-green-700 hover:duration-300 hover:bg-green-300'>
                            see all
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </span>
                    </Link>
                </h2>

                <div className='flex justify-between gap-2 lg:gap-0 bg-white w-fit px-4 py-2 rounded-lg w-full lg:w-fit' >
                    <div id="imgs" className='flex gap-2 lg:pe-2 pe-4 lg:me-2 me-4 border border-0 border-r-2 border-gray-500'>
                        <img src={iOne} alt='seller image' className='w-12 lg:w-8 rounded-full duration-300 hover:scale-125 ' />
                        <img src={iTwo} alt='seller image' className='w-12 lg:w-8 rounded-full duration-300 hover:scale-125 ' />
                        <img src={iThree} alt='seller image' className='w-12 lg:w-8 rounded-full duration-300 hover:scale-125 ' />
                        <img src={iFour} alt='seller image' className='w-12 lg:w-8 rounded-full duration-300 hover:scale-125 ' />
                    </div>

                    <div id="stats">
                        <h4 className='font-medium text-lg'>14,556 plant sold</h4>
                        <div className='flex gap-4'>
                            <span className='opacity-60'>21 sellers</span>
                            <span className='opacity-60'>7 days</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Sellers */}
            <div id='featuredSellers' className='w-full lg:w-fit h-fit'>
                <h2 className='flex justify-between items-center font-medium text-base capitalize mb-2'>featured Sellers
                    <Link to='/products'>
                        <span className='flex justify-between gap-2 items-center px-2 py-1 opacity-40  rounded-md duration-300 hover:ring hover:ring-2 hover:ring-green-700 hover:duration-300 hover:bg-green-300'>
                            see all
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </span>
                    </Link>
                </h2>
                <div className='flex justify-between gap-2 lg:gap-0 bg-white w-fit px-4 py-2 rounded-lg w-full lg:w-fit' >
                    <div id="imgs" className='flex gap-2 lg:pe-2 pe-4 lg:me-2 me-4 border border-0 border-r-2 border-gray-500'>
                        <img src={iOne} alt='seller image' className='w-12 lg:w-8 rounded-full duration-300 hover:scale-125 ' />
                        <img src={iTwo} alt='seller image' className='w-12 lg:w-8 rounded-full duration-300 hover:scale-125 ' />
                        <img src={iThree} alt='seller image' className='w-12 lg:w-8 rounded-full duration-300 hover:scale-125 ' />
                        <img src={iFour} alt='seller image' className='w-12 lg:w-8 rounded-full duration-300 hover:scale-125 ' />
                    </div>

                    <div id="stats">
                        <h4 className='font-medium text-lg'>28,556 plant sold</h4>
                        <div className='flex gap-4'>
                            <span className='opacity-60'>36 sellers</span>
                            <span className='opacity-60'>1 Month</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products