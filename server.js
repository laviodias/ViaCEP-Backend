const express = require('express');
const app = express();
const fetch = require('cross-fetch');
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(express.static('./viaCep/src'))

app.use(express.json())

app.get('/api/:cep', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`, { mode: 'cors' })
    .then(response => response.json())
    .then(data => res.send(data))
    console.log('called')
});

app.listen(port, () => console.log(`Server running on port ${port}`));