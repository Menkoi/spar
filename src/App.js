import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import sparHeader from './img/sparheaderMain.png';
import HeaderText from './components/HeaderText';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Teams from './components/Teams';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <img src={sparHeader} class="w-100" alt="Main Header" />
      <HeaderText></HeaderText>
      <Cards></Cards>
      <Teams></Teams>
      <Footer></Footer>
    </div>
  );
}

export default App;
