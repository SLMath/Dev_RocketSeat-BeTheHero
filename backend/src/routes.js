const express = require('express');

const ongController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;