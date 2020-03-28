
exports.up = function(knex) {
    // Cria Tabela!
    return knex.schema.createTable('ongs', (table) => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {
    // Desfazer Tabela!
    return knex.schema.dropTable('ongs');
};
