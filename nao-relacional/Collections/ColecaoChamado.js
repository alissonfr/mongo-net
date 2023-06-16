use("provedor-base-mongo");

db.chamado.insertMany([
    {
        "_id": 1,
        "dataHoraChamado": {
            "$date": "2023-01-01T10:00:00Z"
        },
        "descricao": "Chamado de Suporte",
        "numeroContrato": 1,
        "atendimento": [
            {
                "descricao": "Atendimento Inicial",
                "status": "ativo",
                "dataInicio": {
                    "$date": "2023-01-01T00:00:00Z"
                },
                "dataFim": null,
                "cpfFuncionario": "345.678.901-23",
                "utiliza": [
                    {
                        "codProduto": 1,
                        "nomeProduto": "Cabo de Rede (10m)",
                        "quantidade": 2,
                        "data": {
                            "$date": "2023-01-05T00:00:00Z"
                        }
                    }
                ]
            }
        ]
    },

    {
        "_id": 2,
        "dataHoraChamado": {
            "$date": "2023-02-01T11:00:00Z"
        },
        "descricao": "Chamado de Atualização",
        "numeroContrato": 2,
        "atendimento": [
            {
                "descricao": "Atendimento de Suporte",
                "status": "ativo",
                "dataInicio": {
                    "$date": "2023-02-01T00:00:00Z"
                },
                "dataFim": null,
                "cpfFuncionario": "345.678.901-23",
                "utiliza": [
                    {
                        "codProduto": 2,
                        "nomeProduto": "Roteador TP-LINK Dual-Band",
                        "quantidade": 3,
                        "data": {
                            "$date": "2023-02-10T00:00:00Z"
                        }
                    }
                ]
            }
        ]
    },

    {
        "_id": 3,
        "dataHoraChamado": {
            "$date": "2023-03-01T12:00:00Z"
        },
        "descricao": "Chamado de Configuração",
        "numeroContrato": 3,
        "atendimento": [
            {
                "descricao": "Atendimento de Configuração",
                "status": "inativo",
                "dataInicio": {
                    "$date": "2023-03-01T00:00:00Z"
                },
                "dataFim": {
                    "$date": "2023-03-20T00:00:00Z"
                },
                "cpfFuncionario": "345.678.901-23",
                "utiliza": [
                    {
                        "codProduto": 3,
                        "nomeProduto": "Roteador INTELBRAS 1200mbps Dual-Bank",
                        "quantidade": 4,
                        "data": {
                            "$date": "2023-03-15T00:00:00Z"
                        }
                    }
                ]
            }
        ]
    },

    {
        "_id": 4,
        "dataHoraChamado": {
            "$date": "2023-04-01T13:00:00Z"
        },
        "descricao": "Chamado de Manutenção",
        "numeroContrato": 4,
        "atendimento": [
            {
                "descricao": "Atendimento de Suporte",
                "status": "ativo",
                "dataInicio": {
                    "$date": "2023-04-01T00:00:00Z"
                },
                "dataFim": null,
                "cpfFuncionario": "123.456.789-01",
                "utiliza": []
            }
        ]
    },

    {
        "_id": 5,
        "dataHoraChamado": {
            "$date": "2023-05-01T14:00:00Z"
        },
        "descricao": "Chamado de Implantação",
        "numeroContrato": 5,
        "atendimento": [
            {
                "descricao": "Atendimento de Suporte",
                "status": "ativo",
                "dataInicio": {
                    "$date": "2023-05-01T00:00:00Z"
                },
                "dataFim": null,
                "cpfFuncionario": "234.567.890-12",
                "utiliza": []
            }
        ]
    },

    {
        "_id": 6,
        "dataHoraChamado": {
            "$date": "2023-06-01T15:00:00Z"
        },
        "descricao": "Chamado de Manutenção",
        "numeroContrato": 6,
        "atendimento": [
            {
                "descricao": "Atendimento de Implantação",
                "status": "inativo",
                "dataInicio": {
                    "$date": "2023-06-01T00:00:00Z"
                },
                "dataFim": {
                    "$date": "2023-06-20T00:00:00Z"
                },
                "cpfFuncionario": "345.678.901-23",
                "utiliza": []
            }
        ]
    },

    {
        "_id": 7,
        "dataHoraChamado": {
            "$date": "2023-07-01T16:00:00Z"
        },
        "descricao": "Chamado de Implantação",
        "numeroContrato": 7,
        "atendimento": [
            {
                "descricao": "Atendimento de Desenvolvimento",
                "status": "ativo",
                "dataInicio": {
                    "$date": "2023-07-01T00:00:00Z"
                },
                "dataFim": null,
                "cpfFuncionario": "345.678.901-23",
                "utiliza": []
            }
        ]
    },

    {
        "_id": 8,
        "dataHoraChamado": {
            "$date": "2023-08-01T17:00:00Z"
        },
        "descricao": "Chamado de Configuração",
        "numeroContrato": 8,
        "atendimento": [
            {
                "descricao": "Atendimento de Consultoria",
                "status": "ativo",
                "dataInicio": {
                    "$date": "2023-08-01T00:00:00Z"
                },
                "dataFim": null,
                "cpfFuncionario": "345.678.901-23",
                "utiliza": []
            }
        ]
    },

    {
        "_id": 9,
        "dataHoraChamado": {
            "$date": "2023-09-01T18:00:00Z"
        },
        "descricao": "Chamado de Análise",
        "numeroContrato": 9,
        "atendimento": [
            {
                "descricao": "Atendimento de Análise",
                "status": "ativo",
                "dataInicio": {
                    "$date": "2023-09-01T00:00:00Z"
                },
                "dataFim": null,
                "cpfFuncionario": "345.678.901-23",
                "utiliza": []
            }
        ]
    },

    {
        "_id": 10,
        "dataHoraChamado": {
            "$date": "2023-10-01T19:00:00Z"
        },
        "descricao": "Chamado de Configuração",
        "numeroContrato": 10,
        "atendimento": [
            {
                "descricao": "Atendimento de Configuração",
                "status": "ativo",
                "dataInicio": {
                    "$date": "2023-10-01T00:00:00Z"
                },
                "dataFim": null,
                "cpfFuncionario": "345.678.901-23",
                "utiliza": []
            }
        ]
    }
]);