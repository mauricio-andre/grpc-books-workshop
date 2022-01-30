<h1 align="center">
  grpc-book-workshop
</h1>

<h2 align="center">
  Server e client GRPC para cadastrar autores
</h2>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#get-started">Get Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

---

## Sobre o projeto

Este projeto foi construído durante do workshop DoWhile2020 no evento 'Comunicação entre micro-serviços com gRPC'. O sistema desenvolvido consiste em um servidor GRPC simples que permite o cadastro de autores ao que seria um sistema de livraria, foi desenvolvido também um sistema cliente que consome as rotas GRPC construídas.


## Get Started

Para executar essa aplicação é necessário possuir as seguintes dependências em seu ambiente
- nodeJs ^14.15.5

Siga os passos abaixo para executar este projeto em seu computador
- Faça o clone deste repositório para seu ambiente
- Acesse o diretório do repositório por meio do terminal
- Execute o comando `yarn install` para baixar as dependências do projeto
- Execute o comando `node ./src/server.js` para executar o servidor da aplicação
- Acesse o arquivo [./src/client.js](./src/client.js) e remova o comentário da rota que deseja executar
- Execute o comando `node ./src/client.js` para executar a requisição ao servidor

## Licença
Esse projeto está sob licença MIT, veja o arquivo de [LICENSE](./LICENSE) para mais detalhes
