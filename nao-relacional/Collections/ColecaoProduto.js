use("provedor-base-mongo");

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
)
