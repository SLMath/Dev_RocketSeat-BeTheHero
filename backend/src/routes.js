const express = require('express');
const crypto  = require('crypto');

const db_connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', async (request, response) => {
    const ongs = await db_connection('ongs').select('*');

    return response.json( ongs );
});

routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); // Gerar ID aleatório

    await db_connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });

    return response.json({ 
        id 
    });
});

module.exports = routes;