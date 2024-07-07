import aboutImg from '../../assets/about-us.png';
import CountUp from 'react-countup';

export default function About () {
    return(
        <section id='about_us' className="container mx-auto px-4 mt-10 mb-8">
            <div className='flex gap-5 justify-center flex-wrap lg:flex-nowrap'>

                <div className="about_us_img">
                    <img src={aboutImg} alt="about us image"  className='w-full'/>
                </div>

                <div className="about_text">
                    <h2 className='font-bold'>About Us</h2>
                    <p className='opacity-75 text-balance'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Explicabo voluptates quidem fugit, soluta voluptatibus voluptatum aut laborum, atque molestias quae beatae quam, perferendis iusto Nesciunt.
                    </p>

                    <div className='flex gap-5 mt-4'>
                        <div>
                            <div className='mb-2'>
                                <span className='font-bold'><CountUp start={5} end={25} duration={3}>25</CountUp>K</span>
                                <p className='opacity-80'>Completed Projects.</p>
                            </div>
                            
                            <div>
                                <span className='font-bold'><CountUp start={5} end={40} duration={3}>40</CountUp>K</span>
                                <p className='opacity-80'>Completed Projects.</p>
                            </div>
                        </div>

                        <div>
                            <div className='mb-2'>
                                <span className='font-bold'><CountUp start={5} end={20} duration={3}>20</CountUp>M</span>
                                <p className='opacity-80'>Completed Projects.</p>
                            </div>
                            <div>
                                <span className='font-bold'><CountUp start={5} end={32} duration={3}></CountUp>M</span>
                                <p className='opacity-80'>Completed Projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};