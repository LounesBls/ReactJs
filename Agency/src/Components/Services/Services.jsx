import React from 'react';

function Services() {
    const serves = [
        {
            id: 1,
            title: 'app development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem aregato Quaerat dolor maxime minus obcaecati.',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className='dark:fill-dark-primaryClr' fill="#fff"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>,
        },
        {
            id: 2,
            title: 'web design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem aregato Quaerat dolor maxime minus obcaecati.',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className='dark:fill-dark-primaryClr' fill="#fff"><path d="M10 8H14V6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H16V14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V16H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14H8V10H6.5C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V8ZM8 8V6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8H8ZM8 16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5V16ZM16 8H17.5C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5V8ZM16 16V17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16H16ZM10 10V14H14V10H10Z"></path></svg>,
        },
        {
            id: 3,
            title: 'graphics Design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem aregato Quaerat dolor maxime minus obcaecati.',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className='dark:fill-dark-primaryClr' fill="#fff"><path d="M7.05033 14.1213L4.929 16.2427L7.75743 19.0711L19.0711 7.75737L16.2427 4.92894L14.1214 7.05026L15.5356 8.46448L14.1214 9.87869L12.7072 8.46448L11.293 9.87869L12.7072 11.2929L11.293 12.7071L9.87875 11.2929L8.46454 12.7071L9.87875 14.1213L8.46454 15.5355L7.05033 14.1213ZM16.9498 2.80762L21.1925 7.05026C21.583 7.44079 21.583 8.07395 21.1925 8.46448L8.46454 21.1924C8.07401 21.5829 7.44085 21.5829 7.05033 21.1924L2.80768 16.9498C2.41716 16.5592 2.41716 15.9261 2.80768 15.5355L15.5356 2.80762C15.9261 2.4171 16.5593 2.4171 16.9498 2.80762ZM14.1214 18.3635L15.5356 16.9493L17.7781 19.1918H19.1923V17.7776L16.9498 15.5351L18.364 14.1208L20.9997 16.7565V20.9999H16.7578L14.1214 18.3635ZM5.63597 9.87806L2.80754 7.04963C2.41702 6.65911 2.41702 6.02594 2.80754 5.63542L5.63597 2.80699C6.02649 2.41647 6.65966 2.41647 7.05018 2.80699L9.87861 5.63542L8.4644 7.04963L6.34308 4.92831L4.92886 6.34253L7.05018 8.46385L5.63597 9.87806Z"></path></svg>,
        },
        {
            id: 4,
            title: 'digital marketing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem aregato Quaerat dolor maxime minus obcaecati.',
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className='dark:fill-dark-primaryClr' fill="#fff"><path d="M6 19H18V9.15745L12 3.7029L6 9.15745V19ZM19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM7.5 13H9.5C9.5 14.3807 10.6193 15.5 12 15.5C13.3807 15.5 14.5 14.3807 14.5 13H16.5C16.5 15.4853 14.4853 17.5 12 17.5C9.51472 17.5 7.5 15.4853 7.5 13Z"></path></svg>,
        },
    ]
    return (
        <section className='px-4' id='services'>
            <div className="container mx-auto">
                <h2 className='mt-8 capitalize text-center text-3xl font-semibold dark:text-dark-headings-linksClr'>save time managing your business with</h2>
                <h3 className='text-light-primary-countSectBg-btnPrimaryClr py-2 mb-8 capitalize text-center text-3xl font-semibold dark:bg-gradient-to-r dark:text-[transparent] dark:bg-clip-text dark:from-dark-counterClrOne dark:via-dark-counterClrTwo dark:to-dark-counterClrThree'>our best services</h3>

                <div className="servSection grid grid-cols-4 gap-8">
                    {
                        serves.map((serve) => <div key={serve.id} className='col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-1 px-6 py-10 rounded-md dark:bg-gradient-to-tr dark:from-dark-cardBgOne dark:via-dark-cardBgTwo dark:to-dark-cardBgthree'>
                            <span className='bg-light-primary-countSectBg-btnPrimaryClr dark:bg-dark-btnSecondaryBg border-2 border-light-primary-countSectBg-btnPrimaryClr dark:border-dark-btnPrimaryBg-linkActiveClr flex w-fit mx-auto p-4 rounded-lg dark:bg-dark-cardBgOne dark:border-2 dark:border-dark-primaryClr'>{serve.svg}</span>
                            <h2 className='text-light-primary-countSectBg-btnPrimaryClr text-3xl text-center capitalize py-10 font-bold dark:bg-gradient-to-r dark:text-[transparent] dark:bg-clip-text dark:from-dark-counterClrOne dark:via-dark-counterClrTwo dark:to-dark-counterClrThree'>{serve.title}</h2>
                            <p className='dark:text-dark-paragraphs text-balance text-center text-md leading-8 font-medium'>{serve.description}</p>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Services