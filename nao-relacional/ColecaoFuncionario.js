// --------------------------------------
// Banco de Dados Provedor de Internet
// --------------------------------------

// Exclui o Banco de Provedor caso necessário
// db.dropDatabase();

// Comando para criar o banco de dados da Empresa, que será chamado de provedor-base-mongo
const database = 'provedor-base-mongo';
use(database);

// Exclui a coleção de funcionários caso necessário
// db.funcionario.remove();

// Caso queira remover todos os documentos da coleção funcionário
// db.funcionario.deleteMany({});

// MongoDB Playground, ambiente de desenvolvimento a partir da extensão do vs code
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Comando que exibe a coleção completa de funcionários
// db.funcionario.find();

db.funcionario.insertMany([
  {
    "_id": "123.456.789-01",
    "tipo": "atendente",
    "email": "carlinhos@hotmail.com",
    "dataInicio": "2022-01-01",
    "dataFim": null,
    "senha": "senha1",
    "login": "carlos2023",
    "dataNascimento": "1990-01-01",
    "nome": "Carlos Souza",
    "endereco": {
      "uf": "BA",
      "cidade": "Vitória da Conquista",
      "cep": "40000-000",
      "bairro": "Centro",
      "rua": "Rua A",
      "numero": 123
    },
    "telefones": [
      {
        "telefone": "1234567890"
      }
    ]
  },
  {
    "_id": "234.567.890-12",
    "tipo": "atendente",
    "email": "mari237@gmail.com",
    "dataInicio": "2022-02-01",
    "dataFim": null,
    "senha": "senha2",
    "login": "mari123",
    "dataNascimento": "1990-02-01",
    "nome": "Mariana Santos",
    "endereco": {
      "uf": "BA",
      "cidade": "Vitória da Conquista",
      "cep": "40000-000",
      "bairro": "Candeias",
      "rua": "Avenida B",
      "numero": 456
    },
    "telefones": [
      {
        "telefone": "2345678901"
      }
    ]
  },
  {
    "_id": "345.678.901-23",
    "tipo": "tecnico",
    "email": "pedrinho_m@gmail.com",
    "dataInicio": "2022-03-01",
    "dataFim": null,
    "senha": "senha3",
    "login": "pedro1993",
    "dataNascimento": "1990-03-01",
    "nome": "Pedro Costa",
    "endereco": {
      "uf": "BA",
      "cidade": "Vitória da Conquista",
      "cep": "40000-000",
      "bairro": "Miro Cairo",
      "rua": "Rua C",
      "numero": 789
    },
    "telefones": [
      {
        "telefone": "3456789012"
      }
    ]
  }
]);


