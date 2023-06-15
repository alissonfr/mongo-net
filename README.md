# Projeto de Banco de Dados Não Relacional

Esta documentação tem como objetivo fornecer uma visão geral do projeto de migração do banco de dados relacional MySQL para o banco de dados não relacional MongoDB, com foco em um provedor de internet. Aqui você encontrará informações sobre a estrutura do projeto, os motivos da escolha do MongoDB, o processo de migração e as considerações importantes a serem levadas em conta.

## Requisitos

- MongoDB desenvolvido na versão [1.37.0]

## Configuração

1. Instale o MongoDB [ve1.38.0] em seu sistema operacional. 
Você pode encontrar instruções de instalação no site oficial do MongoDB: [https://www.mongodb.com/docs/compass/current/release-notes/].

2. Siga as instruções fornecidas na documentação oficial para instalar o MongoDB no seu sistema operacional específico.

## Instalação

1. Inicie o servidor do MongoDB:
Inicie a aplicação, no nosso projeto utilizamos o Visual Studio Code para a elaboração do banco e criação das suas collections.
Também utilizamos o robo3T para realizar alguns testes e gerar a imagem das collections que foram mostradas na apresentação do projeto em sala de Aula.

2. No VScode:

Após a instalação, abra o Visual Studio Code no seu sistema.
- Instale a extensão do MongoDB para o Visual Studio Code:
- Clique no ícone de extensões no lado esquerdo da barra lateral, ou use o atalho Ctrl+Shift+X. 
- Pesquise por "MongoDB" na barra de pesquisa.
- Selecione a extensão "MongoDB for Visual Studio Code" e clique em "Install" (Instalar). Aguarde até que a instalação seja concluída.
- Siga as instruções da documentação do MongoDB para criar uma conexão descrito no passo 1 do ## Configuração

3. Executando
- Após o MongoDB está totalmente configurado pegue os arquivos deste projeto e salve em um diretório local em sua máquina.
- pegue o conteudo de cada arquivo JavaScript da pasta collections e execute no playground que foi gerado a partir da extensão mongo criada.

-----

## Objetivo geral

O objetivo geral deste projeto é migrar o banco de dados relacional MySQL para o banco de dados não relacional MongoDB em um provedor de internet. O banco de dados será responsável por armazenar informações sobre os funcionários, atendimentos, produtos, clientes, contratos, chamados, entre outros dados relevantes para um sistema de atendimento e suporte técnico.

## Problemas Identificados
Durante a análise do banco de dados relacional MySQL, foram identificados alguns problemas que podem ser resolvidos com a migração para o MongoDB:

1. Complexidade de Relacionamentos: O modelo relacional possui várias tabelas relacionadas por chaves estrangeiras, o que pode aumentar a complexidade das consultas e exigir várias junções para obter os dados necessários.

2. Flexibilidade de Esquema: O esquema rígido do MySQL pode dificultar a adição ou remoção de campos em tabelas existentes. Isso pode ser problemático em um ambiente em constante evolução, onde os requisitos do sistema podem mudar com frequência.

3. Escala e Desempenho: O MongoDB é conhecido por sua capacidade de escalar horizontalmente e lidar com grandes volumes de dados. A migração para o MongoDB pode oferecer melhor desempenho e capacidade de expansão para o sistema.

## Soluções Adotadas na Migração

Modelagem de Dados: O primeiro passo na migração foi analisar o modelo de dados existente no MySQL e identificar as entidades, relacionamentos e atributos relevantes. Com base nessa análise, um novo modelo de dados adequado ao MongoDB foi projetado.

Normalização: No modelo relacional, a normalização é comumente usada para eliminar redundâncias e manter a consistência dos dados. No entanto, no MongoDB, a desnormalização é frequentemente adotada para melhorar o desempenho das consultas. Durante a migração, algumas tabelas foram desnormalizadas para reduzir a complexidade das consultas.

Documentos Embutidos: Para melhorar o desempenho e reduzir a necessidade de junções, alguns relacionamentos um-para-um e um-para-muitos foram representados como documentos embutidos em vez de referências. Isso permite a recuperação de todos os dados necessários em uma única consulta.


-----

## Licença

Os softwares utlilizados neste projeto foram totalmente grátis. 

## Alunos e Desenvolvedores do projeto

- Anderson Mendes
- Alisson Rodrigues
- Arthur Lemos
- Breno Tainan




## Modelo relacional

<img src="relacional/Conceitual%20(Imagem).png" />

<img src="relacional/Lógico%20(Imagem).png"  />











## Conclusão

Este documento forneceu uma visão geral do projeto de migração do banco de dados relacional MySQL para o banco de dados não relacional MongoDB em um provedor de internet. Abordamos a estrutura do projeto, os motivos para escolher o MongoDB, as etapas envolvidas na migração e as considerações importantes a serem levadas em conta. Com a conclusão deste projeto, espera-se que o provedor de internet se beneficie das vantagens do MongoDB, como escalabilidade, flexibilidade e desempenho, atendendo melhor às necessidades dos clientes e otimizando o gerenciamento dos dados.