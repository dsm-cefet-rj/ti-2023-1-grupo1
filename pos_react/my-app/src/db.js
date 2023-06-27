const MongoClient = require('mongodb').MongoClient;

// URL de conexão com o banco de dados MongoDB
const url = 'mongodb://localhost:27017';

// Nome do banco de dados e da coleção
const dbName = 'nomedobancodedados';
const collectionName = 'nomedacolecao';

// Função para conectar ao banco de dados MongoDB
async function connect() {
  try {
    const client = await MongoClient.connect(url, {
      useUnifiedTopology: true,
    });

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    return collection;
  } catch (error) {
    console.log('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
}

module.exports = connect;
