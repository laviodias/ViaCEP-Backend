const express = require('express');
const app = express();
const fetch = require('cross-fetch');
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get('/api/:cep', async (req, res) => {
    fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`, { mode: 'cors' })
    .then(response => response.json())
    .then(data => res.send(data))
    console.log('called')
});

app.listen(port, () => console.log(`Server running on port ${port}`));

const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyCHDEjRnCJqIluIwaLn4YuCCwaj4hQ9nio",
    authDomain: "viacep-e0015.firebaseapp.com",
    projectId: "viacep-e0015",
    storageBucket: "viacep-e0015.appspot.com",
    messagingSenderId: "629301592712",
    appId: "1:629301592712:web:1297ba0ece316273f5153d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

app.post('/firebase/insert/:result', (req, res) => {
    db.ref(`${req.params.result.cep}`).set({
        cep: req.params.result.cep,
        localidade: req.params.result.localidade,
        logradouro: req.params.result.logradouro,
        bairro: req.params.result.bairro,
        uf: req.params.result.uf,
        complemento: req.params.result.complemento,
        ddd: req.params.result.ddd,
    })
    .then(res.send('ok'))
    .catch(error => {
        res.send(error)
    })
})
