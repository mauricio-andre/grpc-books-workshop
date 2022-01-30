const grpc = require('grpc');
const path = require('path');

const AuthorDefinition = grpc.load(path.resolve(__dirname, '../proto/authors.proto'));
const authorHandler = require('./handlers/AuthorHandler.js');

const server = new grpc.Server();
server.addService(AuthorDefinition.AuthorService.service, authorHandler);

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
console.log('listening...');

server.start();