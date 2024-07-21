import React from 'react';
import passta from '../../assets/pasta.png';
import who_items from './who_items'

function Who() {
    return (
        <section className='px-4 my-10' id='about'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2'>
                    <img src={passta} alt='passta image' className='h-fit col-span-2 lg:col-span-1 m-auto' />

                    <div className="details col-span-2 lg:col-span-1">
                        <h2 className='text-white capitalize font-semibold'>who we are? </h2>
                        <h1 className='text-primary_clr capitalize font-bold text-md my-2' >take a look at the bebefits we offer you</h1>
                        <p className='text-p_clr text-balence my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias labore et, consectetur quos exercitationem eius.</p>

                        <div className="benefits grid grid-cols-2 gap-8 mt-8">
                            {who_items.map((item, index) =>
                                <div className="benefit col-span-2 sm:col-span-1" key={index}> 
                                        <span>{item.svg}</span>
                                        <h3 className='text-primary_clr capitalize font-semibold my-2' >{item.title}</h3>
                                        <p className='text-p_clr text-pretty' >{item.description}</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Who;