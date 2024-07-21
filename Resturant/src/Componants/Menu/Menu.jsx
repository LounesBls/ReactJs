import React from 'react';
import menuData from './menuData';

function Menu(props) {

    return (
        <section className='flex justify-center items-center h-fit lg:mt-10 mb-20' id='recipes'>
            <div className="container mx-auto px-4">
                <h2 className='text-primary_clr text-2xl font-semibold mb-8'>popular food menu</h2>
                <div className="grid grid-cols-4 gap-4">
                    {
                        menuData.map((menu)=>
                            <div key={menu.id} className='parent_card col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 bg-secondary_clr p-4 rounded-lg hover:shadow-shadow hover:duration-300 duration-300 hover:-translate-x-1 hover:-translate-y-2' >
                                <img src={menu.imgUrl} alt={menu.alt} className='w-64 mx-auto mb-8' />

                                <article>
                                    {/* Stars SVG */}
                                    <span className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="rgba(247,110,17,1)">
                                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                        </svg>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="rgba(247,110,17,1)">
                                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="rgba(247,110,17,1)">
                                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="rgba(247,110,17,1)">
                                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="rgba(247,110,17,1)">
                                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                        </svg>

                                    </span>

                                    <h2 className='text-primary_clr text-center capitalize py-4'>{menu.title}</h2>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-p_clr capitalize'>price:$<span className='text-primary_clr'>{menu.price}</span></p>

                                        {/* Basket SVG */}
                                        <span className="basket p-2 rounded-lg bg-btn_clr cursor-pointer" onClick={() => props.addItem(menu)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(255,255,255,1)">
                                                <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </article>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Menu