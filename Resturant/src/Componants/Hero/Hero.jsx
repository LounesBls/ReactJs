import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import snacks from './snacks';

export default function Hero() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 9000,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <main className='hero lg:h-fit relative px-4 pb-10 pt-16 md:pt-20 lg:py-32 lg:pb-0 2xl:pb-28 xl:mb-20 flex items-center justify-center' id='home'>
            <div className="container mx-auto px-8 md:px-4 lg:pe-0 pt-16 lg:pt-0 h-full lg:h-96">
                <Slider {...settings} className='w-full'>
                    {
                        snacks.map((snack, index)=>
                            <div className="hero__item !grid grid-cols-2 overflow-hidden" key={index}>
                                <div className="hero_details col-span-2 lg:col-span-1 mb-4 lg:mb-4">
                                    <h2 className='font-semibold text-2xl capitalize text-primary_clr'>{snack.title}</h2>
                                    <p className='font-normal text-lg leading-8 text-p_clr my-4'>{snack.description}</p>
                                    <button className='text-white bg-btn_clr rounded-lg py-1.5 px-4'>explore food</button>
                                </div>

                                <img src={snack.img} alt={snack.alt} className='col-span-2 lg:col-span-1 w-10/12 lg:w-full mx-auto lg:mx-0' />
                            </div>
                        )
                    }
                </Slider>
            </div>
        </main>
    )
};