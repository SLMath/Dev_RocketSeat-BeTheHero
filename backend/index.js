const express = require('express');

const app = express();

app.use(express.json());// Permite receber body params no formato json.

const rout = '/recurso';

/* 
 * metodos HTTP
 *
 * GET (requisitar informacao)
 * POST (cadastras informacao)
 * PUT (alterar informacao)
 * DELETE 
 */
app.get(rout, (request, response) => {
    /*
     * tipos de parametros 
     *
     * Query: parametros nomeados enviados pela rota após um "?" (Filtros, paginação):: 
     *      formato ?_name_=_val_&_query2_&... 
     *      os parametros viram um objeto em request.query
     * Route: parametros usados para identificar recursos:: 
     *      formato /_recurso_/_valor_ e a rota deve estar no formato '/_recurso_/:_prop_'
     *      os parametros viram um objeto em request.params
     * Body: Corpo da requisiçao, enviado sem mudar a rota
     *      os parametros são acessados em request.body
     */
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Matheus S. Lima'
    })
});

app.listen(3033);