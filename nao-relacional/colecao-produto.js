// --------------------------------------
// Banco de Dados Provedor de Internet
// --------------------------------------

// Exclui o Banco de Provedor caso necessário
// db.dropDatabase();

// Comando para criar o banco de dados da Empresa, que será chamado de provedor-base-mongo
const database = 'provedor-base-mongo';
use(database);


// Exclui a coleção de Produtos caso necessário
// db.produto.remove();

// Caso queira remover todos os documentos da coleção Produto
// db.produto.deleteMany({});

// MongoDB Playground, ambiente de desenvolvimento a partir da extensão do vs code
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Comando que exibe a coleção completa de Produtos
// db.produto.find();

// Comando que insere todos os documentos da collection produto
db.produto.insertMany(
    [
        {
          "_id": 1,
          "qtdAtual": 10,
          "qtdMin": 5,
          "nome": "Cabo de Rede (10m)"
        },
        {
          "_id": 2,
          "qtdAtual": 20,
          "qtdMin": 8,
          "nome": "Roteador TP-LINK Dual-Band"
        },
        {
          "_id": 3,
          "qtdAtual": 15,
          "qtdMin": 6,
          "nome": "Roteador INTELBRAS 1200mbps Dual-Band"
        }
      ]
);
