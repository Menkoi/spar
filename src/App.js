import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Route} from 'react-router-dom';
import Home from "./HomeComponents/Home";
import LoginPage from "./LoginComponents/LoginPage";
import AccHome from './AccountHome/AccHome';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/spar" exact component={Home} />
      <Route path="/Login" exact component={LoginPage} />
      <Route path="/AccHome" exact component={AccHome} />
    </div>
  );
}


export default App;
