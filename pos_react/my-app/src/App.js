import React from 'react';
import './style.css';
/*Lembrem de importar as componentes que vcs crierem, 
dessa forma:  */
import Home from './Home'
import Teste from "./Teste.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div class="container">
            <h1>Nao Teams</h1>
            <nav>
              <ul>
                {/* Aqui e o navegador, simplesmente adicionem o nome simples do componente,
                por exemplo Link to="Contato" ou Link to="Salas" etc*/}
                <li><Link to="Inicio">Início</Link></li>
                <li><Link >Salas de Aula</Link></li>
                <li><Link to="Testes">Testes</Link></li>
                <li><Link >Contato</Link></li>
                <li class="login"><Link >Login</Link></li>
              </ul>
            </nav>
          </div>
        <Routes>
          {/*Lembrem de tambem adicionar o route, senao o react dom n funciona
          No seguinte formato por exemplo: 
              <Route path="NomeDoComponente1" element={<NomeDoComponente2/>}/>   
          "NomeDoComponente2 precisa ser o nome exato do componente importado
          "NomeDoComponente1 nao precisa ser desde que seja igual ao nome usado no navegador(linha 22)*/}
          <Route index element={<Home/>}/>
          <Route path="Inicio" element={<Home/>}/>
          <Route path="Testes" element={<Teste/>}/>
        </Routes>
      </Router>  
    </>
  );
}

export default App;
