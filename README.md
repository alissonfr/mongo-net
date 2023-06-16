# Projeto de Banco de Dados Não Relacional

Clique <a href="www.google.com" target="_blank">aqui</a> para acessar a documentação completa do projeto.

## Requisitos

Versão do MongoDB: [1.37.0]

## Objetivo geral

O objetivo geral deste projeto é migrar o banco de dados relacional MySQL para o banco de dados não relacional MongoDB em um provedor de internet. O banco de dados será responsável por armazenar informações sobre funcionários, atendimentos, produtos, clientes, contratos, chamados e outros dados relevantes para um sistema de atendimento e suporte técnico.

## Instalação e configuração

1. Instale o MongoDB [ve1.38.0] em seu sistema operacional. 
* Você pode encontrar instruções de instalação no <a href="https://www.mongodb.com/docs/compass/current/release-notes/" target="_blank">site oficial do MongoDB</a>.

2. Siga as instruções fornecidas na documentação oficial para instalar o MongoDB no seu sistema operacional específico.

No nosso projeto foi utilizado o Visual Studio Code para a elaboração do banco e criação das suas collections. Também foi utilizado o programa Robo3T para realizar alguns testes e gerar a imagem das collections que estão presentes no repositório.
         
3. No VScode:

Após a instalação, abra o Visual Studio Code no seu sistema.
- Instale a <a href="https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode" target="_blank">extensão do MongoDB para o Visual Studio Code</a>: 
- Após o download, clique na nova extensão que acabou de ser adicionada à barra lateral esquerda do VS Code.
- Adicione uma nova conexão passando a seguinte connection string: `mongodb+srv://osquatro:<senha>@provedor.1goz2zc.mongodb.net/`

3. Executando
- Após o MongoDB está totalmente configurado pegue os arquivos deste projeto e salve em um diretório local em sua máquina.
- Agora que o MongoDB está totalmente configurado, você deverá ser capaz de executar os arquivos deste projeto em sua máquina sem problemas.
- Pegue o conteudo de cada arquivo JavaScript da pasta collections e execute no playground que foi gerado a partir da extensão do MongoDB criada. 

## Conclusão

Este documento forneceu uma visão geral do projeto de migração do banco de dados relacional MySQL para o banco de dados não relacional MongoDB em um provedor de internet. Abordamos a estrutura do projeto, e as etapas para a instalação e configuração do mesmo.

## Integrantes do projeto

- Alisson Rodrigues
- Anderson Mendes
- Arthur Lemos
- Breno Tainan

<!-- ## Modelo relacional

<img src="relacional/Conceitual%20(Imagem).png" />

<img src="relacional/Lógico%20(Imagem).png"  />

 -->