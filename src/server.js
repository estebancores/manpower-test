const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors')
const server = express();

const routes = require('./api/router');

server.use(bodyParser.json());
server.use(cors());

server.use('/api', routes);
server.use('/*', (req, res) => res.send('Not Found'));

module.exports = server;
