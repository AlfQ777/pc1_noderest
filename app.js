require('dotenv').config();//tomo todo el archivo .env para trabajar
const Server = require('./models/server');
const server = new Server();
server.listen();

const { application } = require('express');

