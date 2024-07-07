import Ci_1 from '../../assets/web-design.png';
import Ci_2 from '../../assets/graphics-design.png';
import Ci_3 from '../../assets/ui-ux.png';


export default function Courses (){
    return(
        <section id='p_courses' className="container mx-auto px-4 mt-20 mb-10">
            <div className="mb-7">
                <h2 className='text-2xl font-semibold capitalize'>our popular courses</h2>
                <div className="text flex justify-between items-center flex-wrap sm:flex-nowrap">
                    <p className='opacity-65 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam voluptatibus vitae accusantium quae atque.</p>
                    <button className='w-96 sm:w-24 px-2 py-1 mt-4 md:mt-none mx-auto md:mx-0 md:ms-3 bg-[#17bf9e] text-white text-nowrap capitalize rounded-full'>see all</button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
                <div className='bg-[#17bf9e14] rounded-lg duration-300 hover:shadow-lg hover:duration-300 hover:-translate-y-3 cursor-pointer'>
                    <img className='rounded-t-lg' src={Ci_1} alt="Course Image"/>

                    <div className="course_details py-2 px-2">
                        <h3 className="text-xl font-bold mb-4">Web Development-2024</h3>
                        <div className="course_Svg flex justify-between items-center">
                            <span className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} viewBox="0 0 576 512">
                                    <path fill="#17bf9e" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
                                </svg>
                                50 Leson
                            </span>

                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} viewBox="0 0 448 512">
                                    <path fill="#17bf9e" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                                50K
                            </span>
                        </div>
                    </div>
                </div>

                <div className='bg-[#17bf9e14] rounded-lg duration-300 hover:shadow-lg hover:duration-300 hover:-translate-y-3 cursor-pointer'>
                    <img className='rounded-t-lg' src={Ci_2} alt="Course Image"/>

                    <div className="course_details py-2 px-2">
                        <h3 className="text-xl font-bold mb-4">Graphic Design-2023</h3>

                        <div className="course_Svg flex justify-between items-center">
                            <span className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} viewBox="0 0 576 512">
                                    <path fill="#17bf9e" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
                                </svg>
                                20 Leson
                            </span>

                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} viewBox="0 0 448 512">
                                    <path fill="#17bf9e" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                                35K
                            </span>
                        </div>
                    </div>
                </div>

                <div className='bg-[#17bf9e14] rounded-lg duration-300 hover:shadow-lg hover:duration-300 hover:-translate-y-3 cursor-pointer'>
                    <img className='rounded-t-lg' src={Ci_3} alt="Course Image"/>

                    <div className="course_details py-2 px-2">
                        <h3 className="text-xl font-bold mb-4">Ui/Ux Design-2022</h3>

                        <div className="course_Svg flex justify-between items-center">
                            <span className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} viewBox="0 0 576 512">
                                    <path fill="#17bf9e" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
                                </svg>
                                8 Leson
                            </span>

                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} viewBox="0 0 448 512">
                                    <path fill="#17bf9e" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                                18K
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}