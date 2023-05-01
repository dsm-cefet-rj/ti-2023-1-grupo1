/*Lembrem de importar o react, qlqr css que estiver usando, e qualquer compenente que precisar*/
import React from 'react';
import './style.css'
function Teste() {
  /*dentre desse "return()" e onde estara a propria formatacao da pagina, lembrem que nao e sempre 
  exatamente igual ao html, algumas coisas vcs terao que ajustar*/
  return (
    <>
    <main>
      <div className="container">
        <h2>Teste Múltipla Escolha</h2>
        <form method="post" action="#">
          <div className="question">
            <p className="pergunta">1. Qual é a capital da França?</p>
            <label>
              <input type="radio" name="question1" defaultValue="a" />
              a) Londres
            </label>
            <label>
              <input type="radio" name="question1" defaultValue="b" />
              b) Paris
            </label>
            <label>
              <input type="radio" name="question1" defaultValue="c" />
              c) Madrid
            </label>
          </div>
          <div className="question">
            <p className="pergunta">
              2. Qual é o maior planeta do Sistema Solar?
            </p>
            <label>
              <input type="radio" name="question2" defaultValue="a" />
              a) Vênus
            </label>
            <label>
              <input type="radio" name="question2" defaultValue="b" />
              b) Saturno
            </label>
            <label>
              <input type="radio" name="question2" defaultValue="c" />
              c) Júpiter
            </label>
          </div>
          <div className="question">
            <p className="pergunta">3. Quem escreveu Harry Potter?</p>
            <label>
              <input type="radio" name="question3" defaultValue="a" />
              a) J.K. Rowling
            </label>
            <label>
              <input type="radio" name="question3" defaultValue="b" />
              b) Stephen King
            </label>
            <label>
              <input type="radio" name="question3" defaultValue="c" />
              c) George R.R. Martin
            </label>
          </div>
          <button className="enviar-teste" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
    <footer>
      <div className="container">
        <p>© 2023 Não Teams - um trabalho de software web para o Cefet.</p>
      </div>
    </footer>
  </>
  )
}

export default Teste;