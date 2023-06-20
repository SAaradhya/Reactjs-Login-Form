// import logo from './logo.svg';
import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <Router>

    <div className="react-app-main-container">

  <Routes>
    <Route path ="/" element = {<Login/>} />
    <Route path = "/Signup" element = {<Signup/>} />   
  </Routes>
     
    </div>

</Router>

  );
}

export default App;
