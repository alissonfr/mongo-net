use("provedor-base-mongo");

/***
1. Consulta para obter o total de contratos ativos por cidade
Essa consulta permite aos gestores identificar as cidades com maior número de contratos ativos, ajudando-os 
a direcionar recursos e tomar decisões relacionadas à distribuição geográfica da empresa.
*/

db.contrato.aggregate([
  {
    $match: { status: "ativo" }
  },
  {
    $group: {
      _id: "$endereco.cidade",
      quantidade: { $sum: 1 }
    }
  },
  {
    $project: {
      cidade: "$_id",
      quantidade: 1,
      _id: 0
    }
  }
]);


/***
2. Consulta para obter o valor total de contratos fechados por mês
Essa consulta permite aos gestores acompanhar a receita gerada pelos contratos ao longo do tempo, 
identificando os meses mais lucrativos e auxiliando na análise de desempenho financeiro.
*/

db.contrato.aggregate([
  {
    $match: {
      dataFinal: { $exists: true }
    }
  },
  {
    $group: {
      _id: {
        month: { $month: { date: "$dataFinal" } },
        year: { $year: { date: "$dataFinal" } }
      },
      valor_total_contratos: { $sum: "$valorContrato" }
    }
  },
  {
    $project: {
      _id: 0,
      mes: "$_id.month",
      ano: "$_id.year",
      valor_total_contratos: 1
    }
  },
  {
    $sort: {
      ano: 1,
      mes: 1
    }
  }
]);

/***
3. Consulta para listar os produtos mais vendidos
Essa consulta mostra os produtos mais vendidos, permitindo que os gestores identifiquem quais itens 
estão tendo maior demanda. Isso pode auxiliar na gestão de estoque, na definição de promoções e no lançamento de novos produtos.
*/

db.chamado.aggregate([
  {
    $unwind: "$atendimento"
  },
  {
    $unwind: "$atendimento.utiliza"
  },
  {
    $group: {
      _id: "$atendimento.utiliza.codProduto",
      totalUtilizados: { $sum: "$atendimento.utiliza.quantidade" }
    }
  },
  {
    $lookup: {
      from: "produto",
      localField: "_id",
      foreignField: "_id",
      as: "produto"
    }
  },
  {
    $unwind: "$produto"
  },
  {
    $project: {
      _id: 0,
      codigo: "$produto._id",
      nome: "$produto.nome",
      totalUtilizados: 1
    }
  },
  {
    $sort: { totalUtilizados: -1 }
  }
]);

/***
4. Consulta para obter o número de chamados atendidos por cada funcionário
Essa consulta ajuda os gestores a identificar a produtividade e a carga de trabalho de 
cada funcionário, permitindo uma distribuição equilibrada de tarefas e o reconhecimento do desempenho individual.
*/

db.chamado.aggregate([
  {
    $unwind: "$atendimento"
  },
  {
    $group: {
      _id: "$atendimento.cpfFuncionario",
      totalChamadosAtendidos: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "funcionario",
      localField: "_id",
      foreignField: "_id",
      as: "funcionario"
    }
  },
  {
    $unwind: "$funcionario"
  },
  {
    $project: {
      _id: "$funcionario._id",
      nome: "$funcionario.nome",
      totalChamadosAtendidos: 1
    }
  }
]);


/***
5. Consulta para calcular o total de contratos ativos por cliente
Essa consulta pode ajudar os gestores a priorizar o atendimento e suporte aos clientes que possuem mais 
contratos, garantindo sua satisfação e fidelidade.
*/


db.contrato.aggregate([
  {
    $match: { status: "ativo" }
  },
  {
    $group: {
      _id: {
        tipoCliente: "$cliente.tipo",
        identificacao: {
          $cond: {
            if: { $eq: ["$cliente.tipo", "PJ"] },
            then: "$cliente.cnpj",
            else: "$cliente.cpf"
          }
        },
        nome: {
          $cond: {
            if: { $eq: ["$cliente.tipo", "PJ"] },
            then: "$cliente.razaoSocial",
            else: "$cliente.nome"
          }
        }
      },
      totalContratosAtivos: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: "$_id.identificacao",
      tipoCliente: "$_id.tipoCliente",
      nomeCliente: "$_id.nome",
      totalContratosAtivos: 1
    }
  }
]);




