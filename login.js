const connect = require('./db.js');
const fs = require('fs');
const csv = require('csv-parser');

// Função para ler dados do CSV e inseri-los no banco de dados
async function insertDataFromCSV() {
  try {
    const collection = await connect();

    // Ler o arquivo CSV
    fs.createReadStream('login_psw.csv')
      .pipe(csv())
      .on('data', async (row) => {
        // Inserir cada linha do CSV como um documento na coleção
        await collection.insertOne(row);
      })
      .on('end', () => {
        console.log('Dados inseridos com sucesso!');
      });
  } catch (error) {
    console.log('Erro:', error);
    throw error;
  }
}

// Função para verificar o login
async function verifyLogin(username, password) {
  try {
    const data = await readData();

    const match = data.find((item) => item.login === username && item.senha === password);

    return match !== undefined;
  } catch (error) {
    console.log('Erro:', error);
    throw error;
  }
}

// Função para ler dados do banco de dados
async function readData() {
  try {
    const collection = await connect();

    // Lendo os documentos da coleção
    const documents = await collection.find({}).toArray();

    // Retornando os dados no formato desejado
    const data = documents.map((document) => ({
      login: document.login,
      senha: document.senha,
    }));

    return data;
  } catch (error) {
    console.log('Erro:', error);
    throw error;
  }
}

let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  try {
    // Verificar o login
    const loginSuccessful = await verifyLogin(username, password);

    if (loginSuccessful) {
      alert("Login com sucesso");
      location.href = "/pre_react/home.html";
    } else {
      alert("Login falhou");
    }
  } catch (error) {
    console.log('Erro:', error);
  }
});

// Chamada da função para inserir dados do CSV
insertDataFromCSV();
