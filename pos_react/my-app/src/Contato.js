/*Lembrem de importar o react, qlqr css que estiver usando, e qualquer compenente que precisar*/
import React from 'react';
import './style.css'


function Contato() {
  /*dentre desse "return()" e onde estara a propria formatacao da pagina, lembrem que nao e sempre 
  exatamente igual ao html, algumas coisas vcs terao que ajustar*/
  
  return (
    <>
    <header>
      <div className="container">
        <h1>
          <a href="home.html">Não Teams</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="home.html">Início</a>
            </li>
            <li>
              <a href="classroom.html">Salas de Aula</a>
            </li>
            <li>
              <a href="tests.html">Testes</a>
            </li>
            <li>
              <a href="contact.html">Contato</a>
            </li>
            <li className="login">
              <a href="login.html">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div className="container">
        <h2>Entre em contato conosco</h2>
        <p>
          Tem perguntas, comentários ou sugestões? Entre em contato conosco
          abaixo:
        </p>
        <form className="contact-form" action="#" method="post">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required=""
              defaultValue={""}
            />
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </main>
    <footer>
      <div className="container">
        <p>© 2023 Education Website. All rights reserved.</p>
      </div>
    </footer>
  </>
  )
}

export default Contato;