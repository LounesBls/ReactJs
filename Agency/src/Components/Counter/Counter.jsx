import React from 'react';
import CountUp from 'react-countup';

function Counter() {

    const statics = [
        {
            id: 1,
            staticName: "Clients",
            staticValue: 15,
        },
        {
            id: 2,
            staticName: "running projects",
            staticValue: 350,
        },
        {
            id: 3,
            staticName: "projects completed",
            staticValue: 920,
        }
    ]

    return (
        <section className="md:my-16 lg:my-0 tpx-4  py-16 inline-block w-full text-[white] bg-light-primary-countSectBg-btnPrimaryClr dark:bg-[transparent]" id="projects">
            <div className="container mx-auto md:h-64 lg:h-40 flex justify-center items-center">
                <div className="grid grid-cols-3 gap-8 md:gap-12 md:gap-16">
                    {
                        statics.map((statics) =>
                            <div key={statics.id} className="col-span-3 md:col-span-1 text-center">
                                <CountUp useEasing={false} enableScrollSpy={true} scrollSpyDelay={300} scrollSpyOnce={true} duration={2.75} suffix={'k+'} end={statics.staticValue} 
                                    className='text-6xl font-semibold                           
                                        dark:bg-gradient-to-r dark:text-[transparent] dark:bg-clip-text dark:from-[#118fae] dark:via-[#1d81b0] dark:to-[#235dad]'
                                />
                        
                                <h4 className='text-2xl pt-3 font-bold capitalize dark:bg-gradient-to-r dark:text-[transparent] dark:bg-clip-text dark:from-[#118fae] dark:via-[#1d81b0] dark:to-[#235dad]'>{statics.staticName}</h4>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Counter