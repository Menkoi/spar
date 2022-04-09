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
      <Route exact path="/" component={Home} />
      <Route exact path="/spar" component={Home} />
      <Route exact path="/Login" component={LoginPage} />
      <Route exact path="/AccHome" component={AccHome} />
    </div>
    
  );
}


export default App;
