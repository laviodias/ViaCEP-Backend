const express = require('express');
const app = express();
const fetch = require('cross-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
const insert = require('./firebase/insertData')

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/api/:cep', async (req, res) => {
    fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`)
    .then(response => response.json())
    .then(data => res.send(data))
    console.log('called')
});

app.post('/firebase/insert/', (req) => {
    insert.saveData(req.body, function(err, data){
        res.send(data)
    });
})

app.listen(port, () => console.log(`Server running on port ${port}`));