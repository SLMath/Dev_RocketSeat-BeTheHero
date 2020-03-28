const db_connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query; // formato da url ?page=_page_

        const [ count ] = await db_connection('incidents').count(); // retorna um [ { "count(*)" : _count_ } ]

        const incidents = await db_connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id') // Acesso de dados de outra tabela
            .limit(5) // Limitado a 5 elementos
            .offset((page - 1) * 5) // Primeiro elemento
            //.select('*'); // traz todos os dados e acaba sobrescrevendo o id do incident pelo da ong
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);

        // Usualmente o total de itens é retornado pelo X-Total-Count do Header da resposta
        response.header('X-Total-Count', count['count(*)']);

        return response.json( incidents );
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [ id ] = await db_connection('incidents').insert({
            title, 
            description, 
            value,
            ong_id
        });

        return response.json({ 
            id,
            ong_id
        });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        
        const incident = await db_connection('incidents')
            .where('id', id) 
            .select('ong_id') // Unica coluna necessaria
            .first();         // Ja que retorma apenas UM resultado, agiliza processo

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'operation not permited' }); // http status code (like 404 - Not Found)
        }

        await db_connection('incidents').where('id', id).delete();

        return response.status(204).send(); // send = enviar resposta sem corpo
    }

};