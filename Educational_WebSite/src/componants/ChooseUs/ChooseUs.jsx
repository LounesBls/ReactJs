
import { useState } from 'react';
import ChooseImg from '../../assets/why-choose-us.png';
import ReactPlayer from 'react-player'

export default function ChooseUs () {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <section className="container mx-auto mt-20 mb-10 px-4">
            <div className='grid grid-cols-2 gap-4'>
                <div className='col-span-2 lg:col-span-1'>
                    <h2 className="text-2xl font-semibold capitalize">why choose us!</h2>
                    <p className="opacity-65 text-pretty">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, eius exercitationem culpa quibusdam at aliquid nam unde porro temporibus ratione labore commodi dolorum assumenda animi fugit ut quia quisquam cum praesentium,
                        rem mollitia dignissimos impedit.
                    </p>
                </div>

                <div className='video_container relative mt-8 md:mt-0 col-span-2 lg:col-span-1 '>
                    {
                        showVideo
                        ? (<ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls className='!w-full !h-96'/>)
                        : (<img src={ChooseImg} alt="choose img" className=' md:rounded-lg w-full h-5/6' />)
                    }
                    
                    { !showVideo && <svg  className='bg-white rounded-full absolute top-2/4 left-2/4 -translate-y-10 -translate-x-2/4 cursor-pointer'
                                xmlns="http://www.w3.org/2000/svg"
                                height="45" width="45" viewBox="0 0 512 512"
                                onClick={()=>{setShowVideo(!showVideo)}
                            }>
                            <path fill="#17bf9e" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                        </svg>
                    }
                </div>
            </div>
        </section>
    );
};