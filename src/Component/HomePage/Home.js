import React from 'react';
import Contact from '../Contact/Contact';
import MyPortfolio from '../Portfolio/Portfolio';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Service from './Service/Service';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Projects></Projects>
            <Service></Service>
            <MyPortfolio></MyPortfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;