const config = require('../knexfile');
const knex =  require('knex')(config) // Faz a conexão com o banco de dados

//knex.migrate.latest([config])

module.exports = knex