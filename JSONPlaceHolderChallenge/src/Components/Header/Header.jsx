import React from 'react'

function Header() {
    return (
        <header className='py-2'>
            <nav className='capitalize font-semibold text-center text-xl underline'>
                This Application is <a target='blank' href='https://jsonplaceholder.typicode.com/' className='font-bold text-blue-500 hover:scale-125'>JSON Placeholder</a> Challenge.!
            </nav>

        </header>
    )
}

export default Header