import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Home from './Component/HomePage/Home';
import Navbar from './Component/HomePage/Navbar/Navbar';
import PicassoPainting from './Component/HomePage/Projects/PicassoPainting/PicassoPainting';
import Portfolio from './Component/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='aboutme' element={<Portfolio />}></Route>
        <Route path='PicassoPainting' element={<PicassoPainting />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
