import { LuBox, LuUser, LuMessageSquare, LuCalendar } from 'react-icons/lu'
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { TbUsers } from 'react-icons/tb';

const SidebarLinks = [
    {
        id: 1,
        path: '/',
        name: 'dashboard',
        icon: <LuBox strokeWidth={4} />,
    },
    {
        id: 2,
        path: '/members',
        name: 'members',
        icon: <TbUsers strokeWidth={4} />,
    },
    {
        id: 3,
        path: '/messages',
        name: 'messages',
        icon: <LuMessageSquare strokeWidth={4} />,
    },
    {
        id: 4,
        path: '/projects',
        name: 'projects',
        icon: <PiProjectorScreenChartLight  strokeWidth={4} />,
    },
    {
        id: 5,
        path: '/clients',
        name: 'Clients',
        icon: <LuUser strokeWidth={4} />,
    },
    {
        id: 6,
        path: '/plane',
        name: 'work plan',
        icon: <LuCalendar strokeWidth={4} />,
    },
];

export default SidebarLinks;