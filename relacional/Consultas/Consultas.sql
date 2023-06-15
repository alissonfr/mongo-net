/***
1. Consulta para obter o total de contratos ativos por cidade
Essa consulta permite aos gestores identificar as cidades com maior número de contratos ativos, ajudando-os 
a direcionar recursos e tomar decisões relacionadas à distribuição geográfica da empresa.
*/

SELECT cidade, COUNT(*) AS total_contratos
FROM Contrato
WHERE status = 'ativo'
GROUP BY cidade;

/***
2. Consulta para obter o valor total de contratos fechados por mês
Essa consulta permite aos gestores acompanhar a receita gerada pelos contratos ao longo do tempo, 
identificando os meses mais lucrativos e auxiliando na análise de desempenho financeiro.
*/

SELECT MONTH(dataFinal) AS mes, YEAR(dataFinal) AS ano, SUM(valorContrato) AS valor_total
FROM Contrato
WHERE status = 'inativo'
GROUP BY MONTH(dataFinal), YEAR(dataFinal);

/***
3. Consulta para listar os produtos mais utilizados
Essa consulta mostra os produtos mais utilizados, permitindo que os gestores identifiquem quais itens 
estão tendo maior demanda. Isso pode auxiliar na gestão de estoque, na definição de promoções e no lançamento de novos produtos.
*/

SELECT p.nome, SUM(u.quantidade) AS total_vendido
FROM Produto p
INNER JOIN Utiliza u ON p.codProduto = u.fk_Produto_codProduto
GROUP BY p.codProduto
ORDER BY total_vendido DESC;

/***
4. Consulta para obter o número de chamados atendidos por cada funcionário
Essa consulta ajuda os gestores a identificar a produtividade e a carga de trabalho de 
cada funcionário, permitindo uma distribuição equilibrada de tarefas e o reconhecimento do desempenho individual.
*/

SELECT f.nome, (
    SELECT COUNT(*)
    FROM Atendimento a
    WHERE a.fk_Funcionario_cpf = f.cpf
) AS total_chamados
FROM Funcionario f;

/***
5. Consulta para calcular o total de contratos ativos por cliente
Essa consulta pode ajudar os gestores a priorizar o atendimento e suporte aos clientes que possuem mais 
contratos, garantindo sua satisfação e fidelidade.
*/

SELECT c.nome, COUNT(*) AS total_contratos
FROM Cliente c
INNER JOIN Contrato ct ON c.codCliente = ct.fk_Cliente_codCliente
WHERE ct.status = 'ativo'
GROUP BY c.codCliente;