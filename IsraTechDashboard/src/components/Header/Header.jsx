import React from 'react'

function Header() {
    return (
        <header className='sm:flex justify-between items-center gap-20'>
            <div>
                <h1 className='text-xl md:text-3xl text-nowrap font-semibold capitalize'>welcome to planti.</h1>
                <span className='text-nowrap text-sm opacity-80 text-gray-700 capitalize'>hello meDev, welcome back!</span>
            </div>

            <nav className='flex gap-2 justify-between items-center lg:w-full'>
                <div className='hidden lg:flex bg-white py-1 px-2 rounded-md'>
                    <input type="search" placeholder='Search Here' className='shrink'/>
                    {/* Search SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(173,184,194,1)">
                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                </div>

                <div className='hidden sm:flex'>
                    {/* Message SVG */}
                    <svg className='bg-white py-1 px-2 rounded-md me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="32" height="32" fill="rgba(173,184,194,1)">
                        <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path>
                    </svg>

                    {/* bell */}
                    <svg className='bg-white py-1 px-2 rounded-md me-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(173,184,194,1)">
                        <path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
                    </svg>

                    {/* Img */}
                    <div className='group bg-white py-1 px-2 rounded-md me-1'>
                        <img src="/src/assets/team-6.jpg" alt="me" className='w-6 rounded-lg group-hover:w-10 group-hover:scale-150 group-hover:duration-300 group-hover:transition-width group-hover:ease-linear duration-300' />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header