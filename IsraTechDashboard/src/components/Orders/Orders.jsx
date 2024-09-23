import React from 'react';
import { Link } from 'react-router-dom';
import activity from './activity';

function orders() {
    return (
        <section id='activties'>
            <h2 className='flex justify-between items-center font-medium text-base capitalize mb-6'>recent activity
                    <Link to='/orders'>
                        <span className='flex justify-between gap-2 items-center px-2 py-1 opacity-40  rounded-md duration-300 hover:ring hover:ring-2 hover:ring-green-700 hover:duration-300 hover:bg-green-300'>
                            see all
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </span>
                    </Link>
            </h2>

            {/* Resent Activity */}
            <ul className='flex flex-col flex-nowrap gap-4'>
                {activity.map
                    (user => 
                            <li key={user.id} id={user.id} className='flex gap-2 mb-2' >
                                <img src={user.image} alt={user.alt} className='w-10 rounded-full duration-300 hover:scale-150' />
                                <div className='flex items-start justify-between grow'>
                                    <div className='flex flex-col'>
                                        <h3 className='font-medium capitalize' >{user.name}</h3>
                                        <small className='opacity-70 capitalize' >{user.description}</small>
                                    </div>
                                    <span>2 min ago</span>
                                </div>
                            </li>
                    )
                }
            </ul>
        </section>
    )
}

export default orders