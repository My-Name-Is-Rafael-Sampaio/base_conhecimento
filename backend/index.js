const app = require('express')();
const consign = require('consign'); // O Consign facilita o desenvolvimento de aplicativos com separação lógica de arquivos e carregamento automático de scripts.
const db = require('./config/db');
const mongoose = require('mongoose') // faz a coneção com o MongoDB

require('./config/mongodb');

app.db = db
app.mongoose = mongoose

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando......');
});