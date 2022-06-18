import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Home from '../HomePage/Home';
import MyPortfolio from '../Portfolio/Portfolio';
import PicassoPainting from '../HomePage/Projects/HikingGear/HikingGear'
import HikingGear from '../HomePage/Projects/HikingGear/HikingGear'
import TempestTravel from '../HomePage/Projects/TempestTravel/TempestTravel'

import { AnimatePresence } from 'framer-motion'
import Blog from '../HomePage/Blog/Blog';


const AnimatedRoute = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}></Route>
                <Route path='home' element={<Home />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='aboutme' element={<MyPortfolio />}></Route>
                <Route path='blog' element={<Blog />}></Route>
                <Route path='PicassoPainting' element={<PicassoPainting />}></Route>
                <Route path='HikingGear' element={<HikingGear />}></Route>
                <Route path='TempestTravel' element={<TempestTravel />}></Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;