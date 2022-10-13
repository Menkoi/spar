import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./HomeComponents/Home";
import LoginPage from "./LoginComponents/LoginPage";
import AccHome from './AccountHome/AccHome';
import Navbar from './HomeComponents/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/spar" component={<Home/>} />
      <Route path="/spar#" component={<Home/>} />
      <Route path="/login" component={<LoginPage/>} />
      <Route path="/AccHome" component={<AccHome/>} />
      </Routes>
    </div>
    
  );
}


export default App;
