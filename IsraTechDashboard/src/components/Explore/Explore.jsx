import React from 'react';
import dataListings from './data';
import { Link } from 'react-router-dom';

function Explore() {
    return (
        <section>
            <h2 className='flex justify-between items-center font-medium text-base capitalize mb-4'>my listings
                <Link to='/explore'>
                    <span className='flex justify-between gap-2 items-center px-2 py-1 opacity-40  rounded-md duration-300 hover:ring hover:ring-2 hover:ring-green-700 hover:duration-300 hover:bg-green-300'>
                        see all
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                    </span>
                </Link>
            </h2>

            <ul className='grid grid-cols-4 gap-4'>
                {
                    dataListings.map(card => 
                        <li key={card.id} id={card.id} className='col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col justify-center items-center p-4 bg-gray-300 rounded-md capitalize' >
                            <span className='self-end'>{card.svg}</span>
                            <img src={card.img} alt={card.alt} className='w-[180px] h-[100px]' />
                            {card.title}
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default Explore;