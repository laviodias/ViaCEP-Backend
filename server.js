const express = require('express');
const fetch = require('cross-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
const ofirebase = require('./firebase/saveData');

const port = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/:cep', async (req, res) => {
    const response = await fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`)
    const data = await response.json()
    res.send(data)
});

app.post('/firebase/insert/', (req, res) => {
    ofirebase.saveData({
        cep: req.body.cep,
        localidade: req.body.localidade,
        logradouro: req.body.logradouro,
        bairro: req.body.bairro,
        uf: req.body.uf,
        complemento: req.body.complemento,
        ddd: req.body.ddd,
    }, function(err, data){
        res.send(data);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
