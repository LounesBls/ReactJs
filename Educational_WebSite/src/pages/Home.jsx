import React, { Fragment } from "react";
import Header from "../componants/Header/Header";
import Hero from "../componants/Hero/Hero";
import Company from "../componants/Company-Section/Company";
import About from '../componants/About/About';
import Courses from '../componants/Course_Section/Courses';
import ChooseUs from "../componants/ChooseUs/ChooseUs";
import Features from "../componants/Features/Features";
import FreeCourses from "../componants/Free_Courses/FreeCourses";
import TestImonials from "../componants/Testimonials/TestImonials";
import NewsLetter from "../componants/NewsLetter/NewsLetter";
import Footer from "../componants/Footer/Footer";

export default function Home () {
    return (
        <Fragment>
            <Header />
            <Hero />
            <Company />
            <About />
            <Courses />
            <ChooseUs />
            <Features />
            <FreeCourses />
            <TestImonials />
            <NewsLetter />
            <Footer />
        </Fragment>
    );
};