const express = require('express');
const fetch = require('cross-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Para acessar a API, adicione /api/ e o número do CEP que deseja consultar ao final da url')
});

app.get('/api/:cep', async (req, res) => {
    const response = await fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`)
    const data = await response.json()
    res.send(data)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
