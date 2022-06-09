import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact/Contact';
import Home from './Component/HomePage/Home';
import Navbar from './Component/HomePage/Navbar/Navbar';
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
        <Route path='portfolio' element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
