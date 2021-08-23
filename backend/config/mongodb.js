const mongoose = require('mongoose');
const { dbMongo } = require('../.env');

mongoose.connect(dbMongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'Erro!! Não foi possível se conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })