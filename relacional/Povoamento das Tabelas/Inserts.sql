INSERT INTO Cliente (codCliente, email, nome, tipoCliente) VALUES
        (1, 'joaosilva@gmail.com', 'João Silva', 'PF'),
        (2, 'andersonmendes@gmail.com', 'Anderson Mendes', 'PF'),
        (3, 'rosangela@gmail.com', 'Rosangela Costa', 'PF'),
        (4, 'alissonrf@gmail.com', 'Alisson Rodrigues Fernandes', 'PJ');

INSERT INTO PessoaFisica (codCliente, cpf, sexo) VALUES
        (1, '579.359.759-84', 'm'),
        (2, '894.625.576-52', 'm'),
        (3, '654.578.985-56', 'f');

INSERT INTO PessoaJuridica (codCliente, cnpj, razaoSocial) VALUES
        (4, '44.555.666/0001-77', 'Alisson Tech');

INSERT INTO Contrato (codContrato, descricao, valorContrato, dataInicio, dataFinal, uf, cidade, cep, bairro, rua, numero, status, fk_Cliente_codCliente) VALUES
        (1, 'Contrato de Manutenção', 1500.00, '2023-01-01', '2023-12-31', 'BA', 'Vitória da Conquista', '40000-000', 'Centro', 'Rua A', 123, 'ativo', 1),
        (2, 'Contrato de Consultoria', 2000.00, '2023-02-01', '2023-11-30', 'BA', 'Anagé', '40000-000', 'Barra', 'Avenida B', 456, 'ativo', 2),
        (3, 'Contrato de Suporte Técnico', 1800.00, '2023-03-01', '2023-10-31', 'BA', 'Vitória da Conquista', '40000-000', 'Miro Cairo', 'Rua C', 789, 'ativo', 2),
        (4, 'Contrato de Desenvolvimento', 2200.00, '2023-04-01', '2023-09-30', 'BA', 'Vitória da Conquista', '40000-000', 'Pituba', 'Avenida D', 987, 'ativo', 4),
        (5, 'Contrato de Implantação', 1900.00, '2023-05-01', '2023-08-31', 'BA', 'Barra do Choça', '40000-000', 'Lagoa das flores', 'Rua E', 654, 'ativo', 3),
        (6, 'Contrato de Treinamento', 2500.00, '2023-06-01', '2023-07-30', 'BA', 'Planalto', '40000-000', 'Piatã', 'Avenida F', 321, 'ativo', 3),
        (7, 'Contrato de Infraestrutura', 2100.00, '2023-07-01', '2023-06-30', 'BA', 'Vitória da Conquista', '40000-000', 'Brotas', 'Rua G', 159, 'ativo', 1),
        (8, 'Contrato de Marketing Digital', 2300.00, '2023-08-01', '2023-05-31', 'BA', 'Planalto', '40000-000', 'Caminho das Árvores', 'Avenida H', 753, 'ativo', 2),
        (9, 'Contrato de Análise de Dados', 2000.00, '2023-09-01', '2023-04-30', 'BA', 'Vitória da Conquista', '40000-000', 'Miro Cairo', 'Rua I', 951, 'ativo', 1),
        (10, 'Contrato de Segurança da Informação', 1800.00, '2023-10-01', '2023-03-31', 'BA', 'Anagé', '40000-000', 'Rio Vermelho', 'Avenida J', 357, 'ativo', 4);

INSERT INTO Funcionario (cpf, tipo, email, dataInicio, dataFim, senha, login, dataNascimento, nome, uf, cidade, cep, bairro, rua, numero) VALUES
        ('123.456.789-01', 'atendente', 'carlinhos@hotmail.com', '2022-01-01', NULL, 'senha1', 'carlos2023', '1990-01-01', 'Carlos Souza', 'BA', 'Vitória da Conquista', '40000-000', 'Centro', 'Rua A', 123),
        ('234.567.890-12', 'atendente', 'mari237@gmail.com', '2022-02-01', NULL, 'senha2', 'mari123', '1990-02-01', 'Mariana Santos', 'BA', 'Vitória da Conquista', '40000-000', 'Candeias', 'Avenida B', 456),
        ('345.678.901-23', 'tecnico', 'pedrinho_m@gmail.com', '2022-03-01', NULL, 'senha3', 'pedro1993', '1990-03-01', 'Pedro Costa', 'BA', 'Vitória da Conquista', '40000-000', 'Miro Cairo', 'Rua C', 789);

INSERT INTO Chamado (codChamado, dataHoraChamado, descricao, fk_Contrato_codContrato) VALUES
        (1, '2023-01-01 10:00:00', 'Chamado de Suporte', 1),
        (2, '2023-02-01 11:00:00', 'Chamado de Atualização', 2),
        (3, '2023-03-01 12:00:00', 'Chamado de Configuração', 3),
        (4, '2023-04-01 13:00:00', 'Chamado de Manutenção', 4),
        (5, '2023-05-01 14:00:00', 'Chamado de Implantação', 5),
        (6, '2023-06-01 15:00:00', 'Chamado de Manutenção', 6),
        (7, '2023-07-01 16:00:00', 'Chamado de Implantação', 7),
        (8, '2023-08-01 17:00:00', 'Chamado de Configuração', 8),
        (9, '2023-09-01 18:00:00', 'Chamado de Análise', 9),
        (10, '2023-10-01 19:00:00', 'Chamado de Configuração', 10);

INSERT INTO Atendimento (codAtendimento, descricao, status, dataInicio, dataFim, fk_Funcionario_cpf, fk_Chamado_codChamado) VALUES
        (1, 'Atendimento Inicial', 'ativo', '2023-01-01', null, '345.678.901-23', 1),
        (2, 'Atendimento de Suporte', 'ativo', '2023-02-01', null, '345.678.901-23', 2),
        (3, 'Atendimento de Configuração', 'inativo', '2023-03-01', '2023-03-20', '345.678.901-23', 3),
        (4, 'Atendimento de Suporte', 'ativo', '2023-04-01', null, '123.456.789-01', 4),
        (5, 'Atendimento de Suporte', 'ativo', '2023-05-01', null, '234.567.890-12', 5),
        (6, 'Atendimento de Implantação', 'inativo', '2023-06-01', '2023-06-20', '345.678.901-23', 6),
        (7, 'Atendimento de Desenvolvimento', 'ativo', '2023-07-01', null, '345.678.901-23', 7),
        (8, 'Atendimento de Consultoria', 'ativo', '2023-08-01', null, '345.678.901-23', 8),
        (9, 'Atendimento de Análise', 'ativo', '2023-09-01', null, '345.678.901-23', 9),
        (10, 'Atendimento de Configuração', 'ativo', '2023-10-01', null, '345.678.901-23', 10);

INSERT INTO Produto (codProduto, qtdAtual, qtdMin, nome) VALUES
        (1, 10, 5, 'Cabo de Rede (10m)'),
        (2, 20, 8, 'Roteador TP-LINK Dual-Band'),
        (3, 15, 6, 'Roteador INTELBRAS 1200mbps Dual-Bank');

INSERT INTO TelefoneFuncionario (fk_Funcionario_cpf, telefone) VALUES
        ('123.456.789-01', '1234567890'),
        ('234.567.890-12', '2345678901'),
        ('345.678.901-23', '3456789012');

INSERT INTO TelefoneCliente (fk_Cliente_codCliente, telefone) VALUES
        (1, '9876543210'),
        (2, '8765432109'),
        (3, '7654321098');

INSERT INTO Utiliza (fk_Produto_codProduto, fk_Atendimento_codAtendimento, data, quantidade) VALUES
        (1, 1, '2023-01-05', 2),
        (2, 2, '2023-02-10', 3),
        (3, 3, '2023-03-15', 4);

