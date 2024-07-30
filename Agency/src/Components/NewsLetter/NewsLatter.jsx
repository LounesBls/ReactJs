import React from 'react'

function NewsLatter() {
    return <section className='px-4 my-16 bg-gradient-to-b from-light-newsLetterBgOne via-light-newsLetterBgTwo to-light-newsLetterBgThree dark:bg-gradient-to-r dark:from-dark-primaryClr dark:via-dark-teamCardBg dark:to-dark-testImonialBg'>
        <div className="container flex flex-wrap lg:flex-nowrap gap-4 justify-around mx-auto py-16 px-12">
            <h2 className='text-2xl font-semibold dark:text-dark-headings-linksClr '>Explore the <span className='dark:text-dark-primaryClr'> hidden </span>ideas and subscribe!</h2>

            <div className="relative w-96 my-4 lg:my-0">
                <input type="text" className="w-full px-4 py-2.5 pr-16 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your text" />
                <button className="absolute top-1 right-1 h-5/6 px-4 text-[white] bg-light-primary-countSectBg-btnPrimaryClr dark:border-0 font-medium dark:bg-dark-primaryClr rounded-md focus:outline-none">Submit</button>
            </div>

        </div>
    </section>
}

export default NewsLatter