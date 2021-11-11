const express = require('express');
const routes = express.Router();
const { checkSession } = require('../../middlewares/auth')
const controller = require('./controller');

routes.get('/', checkSession, controller.getAll)
routes.get('/:id', checkSession, controller.get)
routes.post('/', checkSession, controller.create)
routes.put('/:id', checkSession, controller.update)
routes.delete('/:id', checkSession, controller.delete)

module.exports = routes;
