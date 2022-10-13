import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./HomeComponents/Home";
import ContactPage from "./ContactComponents/ContactPage";
import AboutHome from './AboutComponents/AboutHome';
import Gallery from './Gallery/Gallery';
import Navbar from './HomeComponents/Navbar';
import Footer from './HomeComponents/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/spar/" element={<Home/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/about" element={<AboutHome/>} />
      <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer/>
    </div>
    
  );
}


export default App;
