const db_connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

const index = async (request, response) => {
    const ongs = await db_connection('ongs').select('*');

    return response.json(ongs);
};

const create = async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId();

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
};

module.exports = { index, create };