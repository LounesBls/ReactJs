import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData from './testimonialsData';
import testImg from '../../assets/testimonial01.png';

const TestImonials = () =>  {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="container mx-auto px-4 my-10">
            <h2 className='text-2xl font-bold capitalize'>our student voice</h2>
            <div className='grid grid-cols-3'>
                <img src={testImg} alt="Testimonials Imgae" className='w-full col-span-3 md:col-span-1'/>

                <Slider {...settings} className='!w-full col-span-3 md:col-span-2 md:overflow-hidden md:my-auto md:px-4'>

                    {
                        testimonialsData.map((item)=>
                        <div className='single_testimonials mt-8 md:mt-0' key={item.id}>
                            <h5 className='font-semibold text-2xl capitalize pb-4'>{item.title}</h5>
                            <p className='opacity-70 text-lg leading-7 mb-2'>{item.description}</p>

                            <div className="student_info py-2">
                                <h6 className='font-medium capitalize text-xl pb-2'>{item.name}</h6>
                                <p className='font-medium capitalize text-base opacity-70'>{item.location}</p>
                            </div>
                        </div>
                        )
                    }
                    
                </Slider>
            </div>
        </section>
    );
};

export default TestImonials;