import React from 'react'
import heroImg from '../../assets/hero-img.png';
import lightHeroImg from '../../assets/light-hero-bg.jpg'

function Hero({theme}) {
    return (
        <main className='lg:flex lg:items-center lg:justify-center px-4 md:h-[calc(100vh-64px)]' id='home'>
            <div className="container flex items-center gap-8 flex-wrap lg:flex-nowrap mx-auto">
                <article className='lg:basis-2/4'>
                    <h1 className='capitalize font-extrabold text-4xl text-light-headingColor text-balance leading-[3.5rem] dark:text-dark-headings-linksClr'>we're creating perfect digital products to
                        <br /><strong className='text-light-primary-countSectBg-btnPrimaryClr dark:text-dark-primaryClr'> promot your brand</strong>
                    </h1>

                    <p className='font-medium capitalize dark:text-dark-paragraphs my-4' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquid ipsam blanditiis saepe quae deserunt doloremque hic.</p>

                    <div className="btns mt-4 lg:mt-12">
                        <a href="#" role='button' className='bg-light-primary-countSectBg-btnPrimaryClr px-4 py-2 rounded-md capitalize 
                            dark:bg-dark-btnSecondaryBg dark:border-2 dark:border-dark-btnPrimaryBg-linkActiveClr dark:text-[#fff] me-2 dark:hover:bg-dark-btnPrimaryBg-linkActiveClr dark:hover:duration-300'
                        >get started now</a>
                        <a href="#" role='button' className='bg-light-primary-countSectBg-btnPrimaryClr px-4 py-2 rounded-md capitalize
                            dark:bg-dark-btnPrimaryBg-linkActiveClr dark:text-[#fff] dark:hover:bg-dark-btnSecondaryBg dark:hover:border-2 dark:hover:border-dark-btnPrimaryBg-linkActiveClr dark:hover:duration-300'
                        > discover more</a>
                    </div>
                </article>

                <img src={theme ? lightHeroImg: heroImg} alt="hero Image" className='w-full md:w-10/12 lg:w-6/12 lg:basis-2/4 mx-auto' />
            </div>
        </main>
    )
}

export default Hero