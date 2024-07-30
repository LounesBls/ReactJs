import React from 'react';
import articleImage from '../../assets/about-us.jpg';

function Article() {
    const properties = [
        {
            id: 1,
            title: 'first working process',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sequi modi iste aperiam quam exercitationem',
            svg: <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512" className='dark:fill-dark-primaryClr' fill="#816aff"><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>,
        },
        {
            id: 2,
            title: 'dedicated team',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sequi modi iste aperiam quam exercitationem',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className='dark:fill-dark-primaryClr' fill="#816aff"><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>,
        },
        {
            id: 3,
            title: '24/7 hours support',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sequi modi iste aperiam quam exercitationem',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className='dark:fill-dark-primaryClr' fill="#816aff"><path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path></svg>,
        },
    ]

    return <article className='p-4 my-16' id="about">
        <div className="container flex flex-wrap lg:flex-nowrap items-start justify-center gap-4 mx-auto">
            <div className="details flex flex-col items-start lg:basis-1/2 my-4">
                <strong className='dark:bg-gradient-to-r dark:text-[transparent] dark:bg-clip-text dark:from-dark-counterClrOne dark:via-dark-counterClrTwo dark:to-dark-counterClrThree'>why choose us</strong>
                <h2 className='capitalize text-3xl font-bold py-2 dark:text-dark-headings-linksClr'>specialist in aviding clients on</h2>
                <h3 className='text-2xl font-bold mb-6 dark:bg-gradient-to-r dark:text-[transparent] dark:bg-clip-text dark:from-dark-counterClrOne dark:via-dark-counterClrTwo dark:to-dark-counterClrThree'>financial challenges</h3>
                <p className='text-md leading-8 dark:text-dark-paragraphs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolores accusamus aspernatur nam maiores, error deleniti praesentium atque vel, eligendi minima fugiat reprehenderit Nihil, dolorem.</p>
                
                <div className='my-8'>
                    {
                        properties.map(item => <div className="flex items-center mb-4 gap-4" key={item.id}>
                            <span className='flex w-fit mx-auto p-4 rounded-lg dark:bg-dark-cardBgOne border-2 border-light-primary-countSectBg-btnPrimaryClr dark:border-dark-primaryClr'>{item.svg}</span>
                            <div className="detail">
                                <h3 className='capitalize text-xl font-medium dark:text-dark-headings-linksClr'>{item.title}</h3>
                                <p className='text-pretty leading-7 dark:text-dark-paragraphs'>{item.description}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
            <img src={articleImage} alt="Article Image" className='w-full lg:w-2/4 max-h-[700px] xl:max-h-[750px] lg:basis-1/2' />
        </div>
    </article>
}

export default Article