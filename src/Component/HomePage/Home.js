import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default Home;