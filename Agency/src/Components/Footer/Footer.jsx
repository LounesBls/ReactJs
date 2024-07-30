import React from 'react'

export default function Footer({toggleTheme}) {
    const sol = [
        {
            id: 1,
            title: 'marketing',
        },
        {
            id: 3,
            title: 'commerce',
        },
        {
            id: 2,
            title: 'analytics',
        },
    ];

    const support = [
        {
            id: 2,
            title: 'documentation',
        },
        {
            id: 3,
            title: 'guides',
        },
        {
            id: 1,
            title: 'price',
        }
    ];

    const company = [
        {
            id: 2,
            title: 'projects',
            href: '#projects',
        },
        {
            id: 1,
            title: 'about',
            href: '#about',
        },
        {
            id: 3,
            title: 'blog',
            href: '#blog',
        },
    ];

    const year = new Date().getFullYear();

    return <footer className='px-4 py-12'>
        <div className="container mx-auto">
            <div className='grid grid-cols-4'>
                
                <div className="digency col-span-4 md:col-span-2 lg:col-span-1 text-center lg:text-left mb-8 md:mb-12">
                    <h2 className='text-2xl font-bold dark:text-dark-primaryClr capitalize text-light-primary-countSectBg-btnPrimaryClr'>Digency</h2>
                    <span className='capitalize text-md font-medium dark:text-dark-paragraphs'>grwo with us</span>
                    <p className='text-lg font-medium dark:text-dark-paragraphs text-balance pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci odio deleniti fuga iure veniam tempore optio explicabo architecto magnam Quod</p>
                </div>

                <ul className=' col-span-4 md:col-span-2 lg:col-span-1 text-center lg:text-left mb-8 md:mb-12'>
                    <li className='text-xl font-bold text-light-primary-countSectBg-btnPrimaryClr dark:text-dark-primaryClr capitalize'>solutions</li>
                    {
                        sol.map(sol => <li key={sol.id} className='capitalize text-lg font-medium dark:text-dark-paragraphs leading-10 hover:text-light-primary-countSectBg-btnPrimaryClr dark:hover:text-dark-primaryClr'>{sol.title}</li>)
                    }
                </ul>

                <ul className=' col-span-4 md:col-span-2 lg:col-span-1 text-center lg:text-left mb-8 md:mb-12'>
                    <li className='text-xl font-bold text-light-primary-countSectBg-btnPrimaryClr dark:text-dark-primaryClr capitalize'>support</li>
                    {
                        support.map(support => <li key={support.id} className='capitalize text-lg font-medium dark:text-dark-paragraphs leading-10 hover:text-light-primary-countSectBg-btnPrimaryClr dark:hover:text-dark-primaryClr'>{support.title}</li>)
                    }
                </ul>

                <ul className=' col-span-4 md:col-span-2 lg:col-span-1 text-center lg:text-left mb-8 md:mb-12'>
                    <li className='text-xl font-bold text-light-primary-countSectBg-btnPrimaryClr dark:text-dark-primaryClr capitalize'>company</li>
                    {
                        company.map(company => <li key={company.id}><a href={company.href} className='capitalize text-lg font-medium dark:text-dark-paragraphs leading-10 hover:text-light-primary-countSectBg-btnPrimaryClr dark:hover:text-dark-primaryClr'>{company.title}</a></li>)
                    }
                    <li className='capitalize text-lg font-medium dark:text-dark-paragraphs leading-10 hover:text-light-primary-countSectBg-btnPrimaryClr dark:hover:text-dark-primaryClr cursor-pointer' onClick={toggleTheme}>Mood</li>
                </ul>

            </div>

            <p className='dark:text-dark-paragraphs text-center'>Copyright {year}, developed by <span className='text-light-primary-countSectBg-btnPrimaryClr dark:text-dark-primaryClr'>me</span> with💖, All rights reserved.</p>
        </div>
    </footer>
}
