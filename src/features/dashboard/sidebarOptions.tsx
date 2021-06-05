import React from 'react';
import Dashboard from '../../assets/vectors/Dashboard';
import Balances from "../../assets/vectors/Balances";
import Customers from "../../assets/vectors/Customers";
import Analytics from "../../assets/vectors/Analytics";
import Settings from "../../assets/vectors/Settings";
import Team from "../../assets/vectors/Team";
import Contacts from "../../assets/vectors/Contacts";
import Logout from "../../assets/vectors/Logout";


export const mainSidebarOptions = [
    {
        name: 'Dashboard',
        icon: <Dashboard />,
        link: '/klasha/dashboard',
    },
    {
        name: 'Balances',
        icon: <Balances />,
        link: '/klasha/balances',
    },
    {
        name: 'Customers',
        icon: <Customers />,
        link: '/klasha/customers',
    },
];

export const generalSidebarOptions = [
    {
        name: 'Analytics',
        icon: <Analytics />,
        link: '/klasha/analytics',
    },
    {
        name: 'Settings',
        icon: <Settings />,
        link: '/klasha/settings',
    },
    {
        name: 'Team',
        icon: <Team />,
        link: '/klasha/team',
    },
    {
        name: 'Contacts',
        icon: <Contacts />,
        link: '/klasha/contacts',
    },
    {
        name: 'Logout',
        icon: <Logout />,
        link: '/klasha/logout',
    },
]
