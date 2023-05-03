/*Lembrem de importar o react, qlqr css que estiver usando, e qualquer compenente que precisar*/
import React from 'react';
import './style.css';


function Login() {
  /*dentre desse "return()" e onde estara a propria formatacao da pagina, lembrem que nao e sempre 
  exatamente igual ao html, algumas coisas vcs terao que ajustar*/
  
  return (
    <>
    
    <div className="login-container">
      <form className="login-form" action="" id="login-form">
        <h2>Login to Education Website</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required="" />
        </div>
        <button type="submit">login</button>
        <div className="bottom">
          <div className="left">
            <input type="checkbox" id="check" />
            <label htmlFor="check"> Remember Me</label>
          </div>
        </div>
      </form>
    </div>
    <footer>
      <div className="container">
        <p>© 2023 Não Teams - um trabalho de software web para o Cefet.</p>
      </div>
    </footer>
  </>

  )
}

export default Login;