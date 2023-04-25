import logo from './logo.svg';
import './App.css';
import Header from "./Teste.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    
    <Router>
      <div class="container">
        <h1><a href="home.html">Não Teams</a></h1>
        <nav>
          <ul>
            <li><Link to="./Teste">Início</Link></li>
          </ul>
        </nav>
      </div> 
      <Routes>
        <Route path="./Teste" element={<Header/>}/>
      </Routes>
    </Router>  
  );
}

export default App;
