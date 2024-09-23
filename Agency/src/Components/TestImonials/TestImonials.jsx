import React from 'react';
import img1 from '../../assets/ava-1.jpg';
import img2 from '../../assets/ava-2.jpg';
import img3 from '../../assets/ava-3.jpg';
import './testImonials.css'

// Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import autoprefixer from 'autoprefixer';

function TestImonials() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const imonials = [
        {
            id: 1,
            name: 'williwam cooper',
            position: 'Sr.Product Designer',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, consequuntur hic ipsa fugiat cumque deleniti dicta doloremque iste culpa aut magnam aspernatur quod error delectus.',
            image: img1,
            alt: "Person's Image"
        },
        {
            id: 2,
            name: 'anney martine',
            position: 'software Developer',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, consequuntur hic ipsa fugiat cumque deleniti dicta doloremque iste culpa aut magnam aspernatur quod error delectus.',
            image: img2,
            alt: "Person's Image"
        },
        {
            id: 3,
            name: 'jhon doe',
            position: 'CEO, workcreation',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, consequuntur hic ipsa fugiat cumque deleniti dicta doloremque iste culpa aut magnam aspernatur quod error delectus.',
            image: img3,
            alt: "Person's Image"
        }
    ];

    return <section className='px-8 sm:px-4 my-16'>
        <div className="slider container mx-auto">
            <h2 className='text-black dark:text-dark-headings-linksClr capitalize text-3xl font-bold text-center text-balance py-4 mb-8'>trusted by more than 
                <span className='text-light-primary-countSectBg-btnPrimaryClr dark:text-dark-primaryClr'> 5,000 customers</span></h2>

            <Slider {...settings} className='md:w-4/6 md:mx-auto'>
                {
                    imonials.map(imonial =>
                        <div key={imonial.id} className='!flex flex-wrap lg:flex-nowrap lg:gap-8 rounded-lg bg-[#ddd] dark:bg-dark-testImonialBg'>
                            <img src={imonial.image} alt={imonial.alt} className='w-full h-64 lg:h-80 lg:w-4/12 rounded-t-lg lg:rounded-t-[0] lg:!rounded-l-lg' />

                            <div className='px-4 lg:ps-0 py-6'>
                                <p className='text-lg font-medium dark:text-dark-paragraphs text-balance'>{imonial.description}</p>

                                <h3 className='text-2xl font-bold capitalize pt-12 pb-2 text-light-primary-countSectBg-btnPrimaryClr dark:text-dark-headings-linksClr' >{imonial.name}</h3>
                                <span className='text-md font-medium capitalize text-nowrap text-[#666666f2] dark:text-dark-paragraphs'>{imonial.position}</span>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </div>
    </section>
}

export default TestImonials