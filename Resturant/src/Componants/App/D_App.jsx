import React from 'react';
import './d_app.css';
import app from '../../assets/app.png';

function D_App() {
    return (
        <section className='D_App my-10 px-4 pb-16'>
            <div className="container mx-auto bg-primary_clr rounded-lg grid grid-cols-2 h-full">
                <div className="imgs lg:relative col-span-2 lg:col-span-1">
                    <img src={app} alt="mobile restaurant's app " className='lg:absolute' />
                </div>

                <article className='col-span-2 lg:col-span-1 flex flex-col justify-center items-start px-8 sm:px-[2.6rem] lg:px-0 lg:pb-8'>
                    <h3 className='capitalize text-xl font-bold'>download our app</h3>
                    <h2 className='capitalize text-4xl font-extrabold text-balance mb-3'>never feel hungry! download our mobile app order delicious food</h2>
                    <p className='text-white leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae nisi architecto assumenda earum quasi, sapiente ut officia nihil corrupti.</p>

                    <div className="media flex flex-wrap items-center py-4">
                        {/* Apple Store */}
                        <a href='https://www.apple.com/store' target='blank' className='w-40 flex items-center gap-2 capitalize py-1 px-4 rounded-lg font-semibold bg-body_clr text-white me-4 mb-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)">
                                    <path d="M15.778 8.20793C15.3053 8.1711 14.7974 8.28434 14.0197 8.58067C14.085 8.55577 13.2775 8.87173 13.0511 8.95077C12.5494 9.12593 12.1364 9.22198 11.6734 9.22198C11.2151 9.22198 10.7925 9.13042 10.3078 8.96683C10.1524 8.91441 9.99616 8.8564 9.80283 8.7809C9.71993 8.74852 9.41997 8.62947 9.3544 8.60379C8.70626 8.34996 8.34154 8.25434 8.03885 8.26181C6.88626 8.2765 5.79557 8.9421 5.16246 10.0442C3.87037 12.2875 4.58583 16.3428 6.47459 19.075C7.4802 20.5189 8.03062 21.035 8.25199 21.0279C8.4743 21.0183 8.63777 20.9713 9.03567 20.8026C9.11485 20.7689 9.11485 20.7689 9.202 20.7317C10.2077 20.3032 10.9118 20.114 11.9734 20.114C12.9944 20.114 13.6763 20.2997 14.6416 20.7159C14.7302 20.7542 14.7302 20.7542 14.8097 20.7884C15.2074 20.9588 15.3509 20.9962 15.6016 20.9902C15.9591 20.9846 16.4003 20.5726 17.3791 19.1362C17.6471 18.7447 17.884 18.3333 18.0895 17.9168C17.9573 17.8077 17.826 17.6917 17.6975 17.5693C16.4086 16.3408 15.6114 14.6845 15.5895 12.6391C15.5756 11.0186 16.1057 9.61487 16.999 8.45797C16.6293 8.3142 16.2216 8.23805 15.778 8.20793ZM15.9334 6.21398C16.6414 6.26198 18.6694 6.47798 19.9894 8.40998C19.8814 8.46998 17.5654 9.81397 17.5894 12.622C17.6254 15.982 20.5294 17.098 20.5654 17.11C20.5414 17.194 20.0974 18.706 19.0294 20.266C18.1054 21.622 17.1454 22.966 15.6334 22.99C14.1454 23.026 13.6654 22.114 11.9734 22.114C10.2694 22.114 9.74138 22.966 8.33738 23.026C6.87338 23.074 5.76938 21.562 4.83338 20.218C2.92538 17.458 1.47338 12.442 3.42938 9.04597C4.40138 7.35397 6.12938 6.28598 8.01338 6.26198C9.44138 6.22598 10.7974 7.22198 11.6734 7.22198C12.5374 7.22198 14.0854 6.06998 15.9334 6.21398ZM14.7934 4.38998C14.0134 5.32598 12.7414 6.05798 11.5054 5.96198C11.3374 4.68998 11.9614 3.35798 12.6814 2.52998C13.4854 1.59398 14.8294 0.897976 15.9454 0.849976C16.0894 2.14598 15.5734 3.45398 14.7934 4.38998Z"></path>
                                </svg>
                            </span>
                            apple store
                        </a>

                        {/* Google Play */}
                        <a href='https://play.google.com/store/games?hl=en' target='blank' className='w-40 flex items-center gap-2 capitalize py-1 px-4 rounded-lg font-semibold bg-white text-body_clr mb-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)">  
                                    <path d="M4.00098 1.73438C4.17692 1.73438 4.34975 1.7808 4.50201 1.86895L20.5061 11.1345C20.9841 11.4112 21.1473 12.023 20.8705 12.501C20.783 12.6522 20.6574 12.7778 20.5061 12.8654L4.50201 22.1309C4.02405 22.4076 3.41226 22.2445 3.13555 21.7665C3.0474 21.6143 3.00098 21.4414 3.00098 21.2655V2.73438C3.00098 2.18209 3.44869 1.73438 4.00098 1.73438ZM12.2931 13.4132L7.79498 17.9124L13.494 14.6134L12.2931 13.4132ZM4.99998 6.11938V17.8784L10.8791 11.9992L4.99998 6.11938ZM15.284 10.4214L13.7071 11.9992L15.285 13.5764L18.009 11.9999L15.284 10.4214ZM7.79398 6.08537L12.2931 10.5852L13.493 9.38437L7.79398 6.08537Z"></path>
                                </svg>
                            </span>
                            google play
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default D_App;