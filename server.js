const express = require('express');
const fetch = require('cross-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
//const insert = require('./firebase/insertData')

const port = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/:cep', async (req, res) => {
    const response = await fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`)
    const data = await response.json()
    res.send(data)
});


app.get('/hello', (req,res) => {
    res.send('Olá, mundo!');
});
    
/* app.post('/firebase/insert/', (req) => {
    insert.saveData(req.body, function(err, data){
        res.send(data)
    });
}) */
