import React, { Fragment, useState } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Counter from '../Components/Counter/Counter';
import Services from '../Components/Services/Services';
import Article from '../Components/Article/Article';
import Team from '../Components/Team/Team';
import Blog from '../Components/Blog/Blog';
import TestImonials from '../Components/TestImonials/TestImonials';
import NewsLatter from '../Components/NewsLetter/NewsLatter';
import Footer from '../Components/Footer/Footer';

function Home() {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        let mood = document.documentElement;
        mood.classList.toggle('dark');
        setTheme(mood.classList.contains('dark'))
        theme == false ? setTheme(true): setTheme(false);
    }

    return (
        <Fragment>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Hero theme={theme} />
            <Counter />
            <Services />
            <Article />
            <Team />
            <Blog />
            <TestImonials />
            <NewsLatter />
            <Footer toggleTheme={toggleTheme} />
        </Fragment>
    )
}

export default Home;