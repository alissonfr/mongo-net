DROP DATABASE IF EXISTS MONGONET;
CREATE DATABASE MONGONET;
USE MONGONET;

CREATE TABLE Funcionario (
    cpf VARCHAR(14) PRIMARY KEY,
    tipo ENUM('atendente', 'tecnico'),
    email VARCHAR(255) UNIQUE,
    dataInicio DATE,
    dataFim DATE,
    senha VARCHAR(60),
    login VARCHAR(32),
    dataNascimento DATE,
    nome VARCHAR(60),
    uf VARCHAR(2),
    cidade VARCHAR(60),
    cep VARCHAR(9),
    bairro VARCHAR(60),
    rua VARCHAR(60),
    numero INT
);

CREATE TABLE Atendimento (
    codAtendimento INT PRIMARY KEY,
    descricao VARCHAR(255),
    status ENUM('ativo', 'inativo'),
    dataInicio DATE,
    dataFim DATE,
    fk_Funcionario_cpf VARCHAR(14),
    fk_Chamado_codChamado INT
);

CREATE TABLE Produto (
    codProduto INT PRIMARY KEY,
    qtdAtual INT,
    qtdMin INT,
    nome VARCHAR(60)
);

CREATE TABLE Cliente (
    codCliente INT PRIMARY KEY,
    email VARCHAR(60),
    nome VARCHAR(60),
    tipoCliente ENUM('PF', 'PJ')
);

CREATE TABLE Contrato (
    codContrato INT PRIMARY KEY,
    descricao VARCHAR(255),
    valorContrato DECIMAL(10, 2),
    dataInicio DATE,
    dataFinal DATE,
    uf VARCHAR(2),
    cidade VARCHAR(60),
    cep VARCHAR(9),
    bairro VARCHAR(60),
    rua VARCHAR(60),
    numero INT,
    status ENUM('ativo', 'inativo'),
    fk_Cliente_codCliente INT
);

CREATE TABLE Chamado (
    codChamado INT PRIMARY KEY,
    dataHoraChamado DATETIME,
    descricao VARCHAR(255),
	fk_Contrato_codContrato INT
);

CREATE TABLE TelefoneFuncionario (
    fk_Funcionario_cpf VARCHAR(14) PRIMARY KEY,
    telefone VARCHAR(25) UNIQUE
);

CREATE TABLE TelefoneCliente (
    fk_Cliente_codCliente INT PRIMARY KEY,
    telefone VARCHAR(25) UNIQUE
);

CREATE TABLE ProdutoAtendimento (
    data DATE PRIMARY KEY,
    fk_Produto_codProduto INT,
	fk_Atendimento_codAtendimento INT(11),
    quantidade INT
);

CREATE TABLE PessoaFisica (
    codCliente INT PRIMARY KEY,
    cpf VARCHAR(14) UNIQUE,
    sexo ENUM('m', 'f')
);

CREATE TABLE PessoaJuridica (
    codCliente INT,
    cnpj VARCHAR(18) UNIQUE,
    razaoSocial VARCHAR(60)
);
 
 
ALTER TABLE Atendimento ADD CONSTRAINT FK_Atendimento_Funcionario
    FOREIGN KEY (fk_Funcionario_cpf)
    REFERENCES Funcionario (cpf);
 
ALTER TABLE Atendimento ADD CONSTRAINT FK_Atendimento_Chamado
    FOREIGN KEY (fk_Chamado_codChamado)
    REFERENCES Chamado (codChamado);
 
ALTER TABLE Contrato ADD CONSTRAINT FK_Contrato_Cliente
    FOREIGN KEY (fk_Cliente_codCliente)
    REFERENCES Cliente (codCliente)
    ON DELETE RESTRICT;
    
ALTER TABLE Chamado ADD CONSTRAINT FK_Chamado_2
    FOREIGN KEY (fk_Contrato_codContrato)
    REFERENCES Contrato (codContrato);
 
ALTER TABLE TelefoneFuncionario ADD CONSTRAINT FK_TelefoneFuncionario_Funcionario
    FOREIGN KEY (fk_Funcionario_cpf)
    REFERENCES Funcionario (cpf);
 
ALTER TABLE TelefoneCliente ADD CONSTRAINT FK_TelefoneCliente_Cliente
    FOREIGN KEY (fk_Cliente_codCliente)
    REFERENCES Cliente (codCliente);
 
ALTER TABLE ProdutoAtendimento ADD CONSTRAINT FK_ProdutoAtendimento_Produto
    FOREIGN KEY (fk_Produto_codProduto)
    REFERENCES Produto (codProduto)
    ON DELETE SET NULL;
 
ALTER TABLE PessoaFisica ADD CONSTRAINT FK_PessoaFisica_Cliente
    FOREIGN KEY (codCliente)
    REFERENCES Cliente (codCliente);
 
ALTER TABLE PessoaJuridica ADD CONSTRAINT FK_PessoaJuridica_Cliente
    FOREIGN KEY (codCliente)
    REFERENCES Cliente (codCliente);
    
ALTER TABLE ProdutoAtendimento ADD CONSTRAINT FK_ProdutoAtendimento_2
    FOREIGN KEY (fk_Atendimento_codAtendimento)
    REFERENCES Atendimento (codAtendimento);
