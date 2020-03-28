
exports.up = function(knex) {
    // Cria Tabela!
    return knex.schema.createTable('incidents', (table) => {
        table.increments();// para o primary, simplesmente numerando em ordem automaticamente

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); // Chave estrangeira, faz link entre tabelas
    });
};

exports.down = function(knex) {
    // Desfazer Tabela!
    return knex.schema.dropTable('incidents');
};
