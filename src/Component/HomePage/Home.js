import React from 'react';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Service></Service>
        </div>
    );
};

export default Home;