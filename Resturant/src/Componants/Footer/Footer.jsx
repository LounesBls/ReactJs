import React from 'react';
import info from './info';
import links from './links';

function Footer() {
    return (
        <footer className='my-10 px-4' id='contact'>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-8">
                    <div className="logo_2 col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1">
                        <div className="logo flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)">
                                <path d="M4.22235 3.80753L10.9399 10.525L8.11144 13.3535L4.22235 9.46438C2.66026 7.90229 2.66026 5.36963 4.22235 3.80753ZM14.2683 12.1464L13.4147 12.9999L20.4858 20.071L19.0716 21.4852L12.0005 14.4141L4.92946 21.4852L3.51525 20.071L12.854 10.7322C12.2664 9.27525 12.8738 7.1769 14.4754 5.5753C16.428 3.62268 19.119 3.1478 20.4858 4.51464C21.8526 5.88147 21.3778 8.57242 19.4251 10.525C17.8235 12.1267 15.7252 12.7341 14.2683 12.1464Z"></path>
                            </svg>
                            <h1 className='font-semibold text-2xl capitalize text-primary_clr'>snacks food</h1>
                        </div>

                        <p className='text-p_clr hover:text-white hover:duration-300 duration-300 text-balance'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt optio quod excepturi quos maiores quisquam.</p>
                    </div>

                    {/* Info Links */}
                    <ul className='col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1' >
                        <li className='text-white text-xl font-bold capitalize mb-2' >info links</li>
                        {
                            info.map((info, index) =>
                                <li key={index} className='mb-2' >
                                    <a
                                        href={info.url}
                                        className='text-p_clr hover:text-white hover:duration-300 duration-300 capitalize font-medium leading-8 '
                                    >{info.info}</a>
                                </li>
                            )
                        }
                    </ul>

                    {/* Quick Links */}
                    <ul className='col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1' >
                        <li className='text-white text-xl font-bold capitalize mb-2' >quick links</li>
                        {
                            links.map((link, index) => 
                                <li key={index} className='mb-2' >
                                    <a
                                        href={link.url}
                                        className='text-p_clr hover:text-white hover:duration-300 duration-300 capitalize font-medium leading-8 '
                                    >{link.link}</a>
                                </li>
                            )
                        }
                    </ul>

                    {/* contact */}
                    <ul className='col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1' >
                        <li className='text-white text-xl font-bold capitalize mb-2' >contact</li>

                        <li className='flex items-center leading-9 gap-3 text-p_clr hover:text-white hover:duration-300 duration-300 capitalize mb-3 ' >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)">
                                    <path d="M17.0839 15.812C19.6827 13.0691 19.6379 8.73845 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.36205 8.73845 4.31734 13.0691 6.91612 15.812C7.97763 14.1228 9.8577 13 12 13C14.1423 13 16.0224 14.1228 17.0839 15.812ZM8.38535 17.2848L12 20.8995L15.6147 17.2848C14.9725 15.9339 13.5953 15 12 15C10.4047 15 9.0275 15.9339 8.38535 17.2848ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10ZM12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12Z"></path>
                                </svg>
                            </span>
                            Boumeders, Algeria
                        </li>

                        <li className='flex items-center leading-9 gap-3 text-p_clr hover:text-white hover:duration-300 duration-300 capitalize mb-3 ' >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)">
                                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                                </svg>
                            </span>
                            lounes03b@gmail.com
                        </li>

                        <li className='flex items-center leading-9 gap-3 text-p_clr hover:text-white hover:duration-300 duration-300 capitalize mb-3 ' >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)">
                                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                                </svg>
                            </span>
                            +213 559 98419
                        </li>
                    </ul>
                </div>
                <p className='text-center text-white mt-12'>copyright 2024و developed by❤️. all rights are reserved</p>
            </div>
        </footer>
    )
}

export default Footer;