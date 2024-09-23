import React from 'react';
import img1 from '../../assets/video.png';
import img2 from '../../assets/article.png';
import img3 from '../../assets/case-study.png';

function Blog() {
    const blogs = [
        {
            id: 1,
            title: 'video',
            description: 'to know about work. Watch some video f...',
            img: img1,
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className='dark:fill-dark-primaryClr' fill="#816aff"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>,
        },
        {
            id: 2,
            title: 'article',
            description: `do you want to improve the way your brand interacts with customer? lets talk...`,
            img: img2,
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className='dark:fill-dark-primaryClr' fill="#816aff"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>,
        },
        {
            id: 3,
            title: 'study case',
            description: 'boost your conversation rate with us...',
            img: img3,
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className='dark:fill-dark-primaryClr' fill="#816aff"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>,
        },
    ];
    
    return <section className='px-4 pb-10 bg-[#effcff] dark:bg-[transparent]' id='blog'>
        <div className="container mx-auto">
            <h2 className='text-2xl font-bold text-center py-8 dark:text-dark-headings-linksClr'>Let's have a look from our <span className='text-light-primary-countSectBg-btnPrimaryClr dark:text-dark-primaryClr'>recent blog</span></h2>

            <div className='grid grid-cols-4 lg:grid-cols-3 gap-8 mt-8' id='blogs'>
                {
                    blogs.map(blog => {
                        if(blog.id == 2) {
                            return (
                                <div key={blog.id} id={blog.id} className='blog border-2 border-[#ddd] dark:border-0 shadow-lg bg-light-liBody-bg lg:-translate-y-8 col-span-4 md:col-span-2 lg:col-span-1 p-6 rounded-lg dark:bg-gradient-to-tr dark:from-dark-cardBgOne dark:via-dark-cardBgTwo dark:to-dark-cardBgThree'>
                                    <h3 className='text-xl capitalize font-semibold pb-2 dark:text-dark-headings-linksClr'>{blog.title}</h3>
                                    <img src={blog.img} alt="blog Image" className='' />
                                    <p className='capitalize py-4 text-balance dark:text-dark-paragraphs'>{blog.description}</p>
                                    <span className='cursor-pointer'>{blog.svg}</span>
                                </div>
                            )
                        } else {
                            return (
                                <div key={blog.id} id={blog.id} className='blog shadow-lg bg-light-liBody-bg col-span-4 md:col-span-2 lg:col-span-1 p-6 rounded-lg dark:bg-gradient-to-tr dark:from-dark-cardBgOne dark:via-dark-cardBgTwo dark:to-dark-cardBgThree'>
                                    <h3 className='text-xl capitalize font-semibold pb-2 dark:text-dark-headings-linksClr'>{blog.title}</h3>
                                    <img src={blog.img} alt="blog Image" className='' />
                                    <p className='capitalize py-4 text-balance dark:text-dark-paragraphs'>{blog.description}</p>
                                    <span className='cursor-pointer'>{blog.svg}</span>
                                </div>
                            )
                        }
        
                    })
                }
            </div>

        </div>
    </section>
}

export default Blog