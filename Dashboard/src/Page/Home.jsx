import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import Header from '../Components/Header/Header';
import SideBar from '../Components/Side/SideBar';
// import MainContent from '../Components/Container/MainContent';

function Home() {
    return (
        <Fragment>
            <Header />
            {/* <MainContent /> */}
            <SideBar />
        </Fragment>
    )
}

export default Home