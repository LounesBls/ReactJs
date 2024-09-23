// import React from 'react';
const sideBarSettings = [
    {
        id: 1,
        name: 'chart',
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(173,184,194,0.86)" className='group-hover:stroke-green-700'>
                <path d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 12.3369 23.4855 12.6704 23.4571 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938V0.542876C11.3296 0.514488 11.6631 0.5 12 0.5ZM11 4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H11V4.06189ZM13 2.552V11H21.448C20.9827 6.55197 17.448 3.01732 13 2.552Z"></path>
            </svg>,
        link: '/chart',
    },
    {
        id: 2,
        name: 'trends',
        svg: <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 576 512" fill="rgba(173,184,194,0.86)" className='group-hover:fill-green-700'>
                <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"/>
            </svg>,
        link: '/trends',
    },
    {
        id: 3,
        name: 'contact',
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(173,184,194,0.86)" className='group-hover:stroke-green-700'>
                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
            </svg>,
        link: '/contact',
    },
    {
        id: 4,
        name: 'Billing',
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(173,184,194,0.86)" className='group-hover:stroke-green-700'>
                <path d="M18.0049 6.99979H21.0049C21.5572 6.99979 22.0049 7.4475 22.0049 7.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H18.0049V6.99979ZM4.00488 8.99979V18.9998H20.0049V8.99979H4.00488ZM4.00488 4.99979V6.99979H16.0049V4.99979H4.00488ZM15.0049 12.9998H18.0049V14.9998H15.0049V12.9998Z"></path>
            </svg>,
        link: '/billing',
    },
];
export default sideBarSettings;