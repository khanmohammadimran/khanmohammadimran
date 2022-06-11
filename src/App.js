import './App.css';
import AnimatedRoute from './Component/AnimatedRoute/AnimatedRoute';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/HomePage/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <AnimatedRoute></AnimatedRoute>
      <Footer></Footer>
    </div>
  );
}

export default App;
