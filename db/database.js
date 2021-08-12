const knex = require("knex");
const knexfile = require("../db/knexfile");

const env = process.env.NODE_ENV || 'development'
const configOptions = knexfile[env];

module.exports(configOptions);