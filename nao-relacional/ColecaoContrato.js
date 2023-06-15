// --------------------------------------
// Banco de Dados Provedor de Internet
// --------------------------------------

// Exclui o Banco de Provedor caso necessário
// db.dropDatabase();

// Comando para criar o banco de dados da Empresa, que será chamado de provedor-base-mongo
// use provedor-base-mongo;

// Exclui a coleção de Contratos caso necessário
// db.contrato.remove();

// Caso queira remover todos os documentos da coleção contrato
// db.contrato.deleteMany({});

// MongoDB Playground, ambiente de desenvolvimento a partir da extensão do vs code
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Comando que exibe a coleção completa de chamados
// db.contrato.find();

// Comando que insere todos os documentos da collection contrato
db.contrato.insertMany([
    {
        "_id": 1,
        "descricao": "Contrato de Manutenção",
        "valorContrato": 1500,
        "dataInicio": {
          "$date": "2023-01-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-12-31T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PF",
          "cpf": "579.359.759-84",
          "sexo": "m",
          "email": "joaosilva@gmail.com",
          "nome": "João Silva"
        },
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
            "telefone": "9876543210"
          }
        ]
      },

      {
        "_id": 2,
        "descricao": "Contrato de Consultoria",
        "valorContrato": 2000,
        "dataInicio": {
          "$date": "2023-02-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-11-30T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PF",
          "cpf": "894.625.576-52",
          "sexo": "m",
          "email": "andersonmendes@gmail.com",
          "nome": "Anderson Mendes"
        },
        "endereco": {
          "uf": "BA",
          "cidade": "Anagé",
          "cep": "40000-000",
          "bairro": "Barra",
          "rua": "Avenida B",
          "numero": 456
        },
        "telefones": [
          {
            "telefone": "8765432109"
          }
        ]
      },

      {
        "_id": 3,
        "descricao": "Contrato de Suporte Técnico",
        "valorContrato": 1800,
        "dataInicio": {
          "$date": "2023-03-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-10-31T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PF",
          "cpf": "894.625.576-52",
          "sexo": "m",
          "email": "andersonmendes@gmail.com",
          "nome": "Anderson Mendes"
        },
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
            "telefone": "8765432109"
          }
        ]
      },

      {
        "_id": 4,
        "descricao": "Contrato de Desenvolvimento",
        "valorContrato": 2200,
        "dataInicio": {
          "$date": "2023-04-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-09-30T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PJ",
          "cnpj": "44.555.666/0001-77",
          "razaoSocial": "Alisson Tech",
          "email": "alissonrf@gmail.com"
        },
        "endereco": {
          "uf": "BA",
          "cidade": "Vitória da Conquista",
          "cep": "40000-000",
          "bairro": "Pituba",
          "rua": "Avenida D",
          "numero": 987
        },
        "telefones": []
      },

      {
        "_id": 5,
        "descricao": "Contrato de Implantação",
        "valorContrato": 1900,
        "dataInicio": {
          "$date": "2023-05-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-08-31T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PF",
          "cpf": "654.578.985-56",
          "sexo": "f",
          "email": "rosangela@gmail.com",
          "nome": "Rosangela Costa"
        },
        "endereco": {
          "uf": "BA",
          "cidade": "Barra do Choça",
          "cep": "40000-000",
          "bairro": "Lagoa das flores",
          "rua": "Rua E",
          "numero": 654
        },
        "telefones": [
          {
            "telefone": "7654321098"
          }
        ]
      },

      {
        "_id": 6,
        "descricao": "Contrato de Treinamento",
        "valorContrato": 2500,
        "dataInicio": {
          "$date": "2023-06-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-07-30T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PF",
          "cpf": "654.578.985-56",
          "sexo": "f",
          "email": "rosangela@gmail.com",
          "nome": "Rosangela Costa"
        },
        "endereco": {
          "uf": "BA",
          "cidade": "Planalto",
          "cep": "40000-000",
          "bairro": "Piatã",
          "rua": "Avenida F",
          "numero": 321
        },
        "telefones": [
          {
            "telefone": "7654321098"
          }
        ]
      },

      {
        "_id": 7,
        "descricao": "Contrato de Infraestrutura",
        "valorContrato": 2100,
        "dataInicio": {
          "$date": "2023-07-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-06-30T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PF",
          "cpf": "579.359.759-84",
          "sexo": "m",
          "email": "joaosilva@gmail.com",
          "nome": "João Silva"
        },
        "endereco": {
          "uf": "BA",
          "cidade": "Vitória da Conquista",
          "cep": "40000-000",
          "bairro": "Brotas",
          "rua": "Rua G",
          "numero": 159
        },
        "telefones": [
          {
            "telefone": "9876543210"
          }
        ]
      },

      {
        "_id": 8,
        "descricao": "Contrato de Marketing Digital",
        "valorContrato": 2300,
        "dataInicio": {
          "$date": "2023-08-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-05-31T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PF",
          "cpf": "894.625.576-52",
          "sexo": "m",
          "email": "andersonmendes@gmail.com",
          "nome": "Anderson Mendes"
        },
        "endereco": {
          "uf": "BA",
          "cidade": "Planalto",
          "cep": "40000-000",
          "bairro": "Caminho das Árvores",
          "rua": "Avenida H",
          "numero": 753
        },
        "telefones": [
          {
            "telefone": "8765432109"
          }
        ]
      },

      {
        "_id": 9,
        "descricao": "Contrato de Análise de Dados",
        "valorContrato": 2000,
        "dataInicio": {
          "$date": "2023-09-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-04-30T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PF",
          "cpf": "579.359.759-84",
          "sexo": "m",
          "email": "joaosilva@gmail.com",
          "nome": "João Silva"
        },
        "endereco": {
          "uf": "BA",
          "cidade": "Vitória da Conquista",
          "cep": "40000-000",
          "bairro": "Miro Cairo",
          "rua": "Rua I",
          "numero": 951
        },
        "telefones": [
          {
            "telefone": "9876543210"
          }
        ]
      },

      {
        "_id": 10,
        "descricao": "Contrato de Segurança da Informação",
        "valorContrato": 1800,
        "dataInicio": {
          "$date": "2023-10-01T00:00:00Z"
        },
        "dataFinal": {
          "$date": "2023-03-31T00:00:00Z"
        },
        "status": "ativo",
        "cliente": {
          "tipo": "PJ",
          "cnpj": "44.555.666/0001-77",
          "razaoSocial": "Alisson Tech",
          "email": "alissonrf@gmail.com"
        },
        "endereco": {
          "uf": "BA",
          "cidade": "Anagé",
          "cep": "40000-000",
          "bairro": "Rio Vermelho",
          "rua": "Avenida J",
          "numero": 357
        },
        "telefones": []
      }
]);