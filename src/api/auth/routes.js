const express = require('express');
const routes = express.Router();

const controller = require('./controller');

routes.post('/login', controller.login)

module.exports = routes;
