const bodyParser = require('body-parser'); // Analisa os corpos das solicitações recebidas em um middleware antes de seus manipuladores, disponível na propriedade req.body.
const cors = require('cors'); // CORS é um pacote node.js para fornecer um middleware Connect / Express que pode ser usado para habilitar CORS com várias opções.

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors());
}