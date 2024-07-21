import React from 'react';
import review from '../../assets/review1.png';
import Slider from 'react-slick';
import rateData from './rateData';

function Rate() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 9000,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <section className='px-8 md:px-4 my-10' >
            <div className="container mx-auto">
                <div className='grid grid-cols-2'>
                    <article className='col-span-2 lg:col-span-1 sm:px-4 lg:pe-0 lg:ps-24' >
                        <h2 className='text-primary_clr text-2xl font-semibold capitalize' >what our customers are saying</h2>
                        <Slider {...settings}>
                            {
                                rateData.map((review, index)=>
                                    <div className='mt-9' key={index}>
                                        <p className='text-p_clr text-lg leading-10 text-balance' >{review.desc}</p>
                                        <h5 className='text-primary_clr text-lg font-semibold capitalize mt-6 mb-2'>{review.name}</h5>
                                        <span className='text-white text-md capitalize' >{review.job}</span>
                                    </div>
                                )
                            }
                        </Slider>
                    </article>

                    <img src={review} alt="review image" className='col-span-2 lg:col-span-1 m-auto mt-10 lg:mt-0' />
                </div>
            </div>
        </section>
    )
}

export default Rate