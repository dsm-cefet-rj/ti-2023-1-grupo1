/*Lembrem de importar o react, qlqr css que estiver usando, e qualquer compenente que precisar*/
import React, { useState } from 'react';
import './style.css'


function Teste(props) {
  /*dentre desse "return()" e onde estara a propria formatacao da pagina, lembrem que nao e sempre 
  exatamente igual ao html, algumas coisas vcs terao que ajustar*/
  const[answer,setAnswer]=useState("");
  /*function handleInputChange(e){
    setAnswer({...answer,[e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    props.setAnswer(props.answer);
  }*/
  return (
    <>
    <main>
      <div className="container">
        {/*test*/}
        <h2>Teste Múltipla Escolha</h2>
        <form method="post" action="#" >
          <div className="question">
            <p className="pergunta">1. Qual é a capital da França?</p>
            <label>
              <input type="radio" name="question1" onChange={ev=>{setAnswer(ev.target.value)}}value="a"/>
              a) Londres
            </label>
            <label>
              <input type="radio" name="question1" value="b" />
              b) Paris
            </label>
            <label>
              <input type="radio" name="question1" value="c" />
              c) Madrid
            </label>
          </div>
          <div className="question">
            <p className="pergunta">
              2. Qual é o maior planeta do Sistema Solar?
            </p>
            <label>
              <input type="radio" name="question2" value="a" />
              a) Vênus
            </label>
            <label>
              <input type="radio" name="question2" value="b" />
              b) Saturno
            </label>
            <label>
              <input type="radio" name="question2" value="c" />
              c) Júpiter
            </label>
          </div>
          <div className="question">
            <p className="pergunta">3. Quem escreveu Harry Potter?</p>
            <label>
              <input type="radio" name="question3" value="a" />
              a) J.K. Rowling
            </label>
            <label>
              <input type="radio" name="question3" value="b" />
              b) Stephen King
            </label>
            <label>
              <input type="radio" name="question3" value="c" />
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