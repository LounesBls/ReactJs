import React from 'react';
import video from '../assets/plantRains.mp4'
import Explore from '../components/Explore/Explore';
import Products from '../components/products/products';
import Orders from '../components/Orders/Orders';

function Home() {
    return (
        <div>
            <div className='flex w-full rounded-r-lg gap-4 mb-4'>
                <div className='relative lg:w-3/5 sm:max-h-[10rem] overflow-hidden rounded-lg'>
                    <video src={video} autoPlay muted className='w-full object-cover' alt='plants video'></video>
                    <div className='flex flex-col items-center justify-center text-white w-full h-full p-4 absolute top-0'>
                        <h2 className='capitalize text-wrap text-md md:text-2xl font-semibold'>create and sell extraordinaray products</h2>
                        <p className='opacity-80 text-xs mx-auto text-wrap'>The world's fast growing industry today are natural made products!</p>
                        <div className='flex items-center gap-2 mt-3'>
                            <button className='capitalize bg-slate-100 px-4 py-1 rounded-md text-gray-500 text-xs sm:text-lg hover:bg-emerald-100 hover:text-gray-500 duration-300'>explore more</button>
                            <button className='capitalize bg-transparent ring ring-2 ring-white px-4 py-1 rounded-md text-white text-xs sm:text-lg hover:bg-emerald-100 hover:text-gray-500 duration-300'>top sellers</button>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:flex items-center h-[10rem]'>
                    <div className='flex h-full py-2 px-4 bg-emerald-100 rounded-md'>
                        <ul className='grid grid-cols-2 w-7/12'>
                            <li className='capitalize col-span-2 text-xl font-bold'>my state</li>
                            <li className='capitalize col-span-1 text-md'>today</li>
                            <li className='capitalize col-span-1 text-md'>this month</li>
                            <li className='capitalize col-span-1 text-sm text-green-600'>4 orders</li>
                            <li className='capitalize col-span-1 text-sm text-green-600'>175 orders</li>
                            <li className='capitalize col-span-2 flex gap-4'>
                                go to my orders
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                </svg>    
                            </li>
                        </ul>
                        <img src="/src/assets/vase.png" alt="plant vase" className='w-fit max-h-[9rem]' />
                    </div>
                    <img src="/src/assets/light.png" alt="Lights" className='h-full w-fit hidden xl:block' />
                </div>
            </div>
            {/* Explore Page */}
            <div className='grid grid-cols-3 gap-4' >
                <div className='col-span-3 lg:col-span-2' >
                    <Explore />
                    <Products />
                </div>
                <div className='col-span-3 lg:col-span-1' >
                    <Orders />
                </div>
            </div>
            
        </div>
    )
}

export default Home