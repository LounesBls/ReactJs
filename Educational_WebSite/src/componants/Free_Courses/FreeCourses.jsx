import CourseData from "./CoursesData";

export default function FreeCourses () {
    return (
        <section id="f_courses" className="container mx-auto px-4 my-10">
            <h2 className="text-2xl font-bold capitalize">our free courses</h2>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-4">
                {
                    CourseData.map((course, index) => 
                        <div key={index} className="group bg-zinc-500/[.06] rounded-lg duration-300 hover:shadow-lg hover:duration-300 hover:-translate-y-3 cursor-pointer">
                            <img src={course.image} alt="Image Course" className="rounded-t-lg " />
                            <div className="relative p-2 pt-4">
                                <h3 className="text-lg font-semibold capitalize">{course.title}</h3>
                                <p className="text-sm opacity-70">{course.details}</p>
                                
                                {/* SVG */}
                                <div className="flex justify-between items-center gap-3 mt-4">
                                    {/* Rank */}
                                    <span className="flex justify-between items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} viewBox="0 0 576 512">
                                            <path fill="#17bf9e" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                        </svg>
                                        25k
                                    </span>
                                    
                                    {/* Views */}
                                    <span className="flex justify-between items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} viewBox="0 0 448 512">
                                            <path fill="#17bf9e" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                        </svg>
                                        50K
                                    </span>
                                </div>

                                <button className='absolute right-5 -top-4 w-32 py-1 md:mt-none bg-[#17bf9e] text-white font-semibold text-nowrap capitalize rounded-full opacity-60 duration-300 group-hover:opacity-100 group-hover:duration-300'>get for free</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};