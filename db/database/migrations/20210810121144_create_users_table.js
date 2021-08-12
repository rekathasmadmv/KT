
exports.up = async knex => {
knex.schema.createTable("users", table => 
{
    table.uuid("id").unique().notNullable();
    table.text("email").unique().notNullable();
    table.text("password").notNullable();
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
});
};

exports.down =  async (knex) => {
  knex.schema.dropTableIfExists("users");
};
