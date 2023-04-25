
let loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", (e) => {
console.log(e)
e.preventDefault();
let username = document.getElementById("username");
let password = document.getElementById("password");

if (username.value.toLowerCase() == "aluno" && password.value == "@cefet") {
    alert("login com sucesso")
    location.href="/pre_react/home.html"
} else {
    // perform operation with form input
    alert("login falhou")
}
});








//to be used later
//<div class="right">
            //<label><a href="#">Forgot password?</a></label>
          //</div>