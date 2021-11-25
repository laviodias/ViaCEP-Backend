const firebase = require('./firebase_connect');

/* module.exports = {
    saveData: function(req, callback){
        firebase.database().ref(`${req.cep}`).set({
            cep: req.cep,
            localidade: req.localidade,
            logradouro: req.logradouro,
            bairro: req.bairro,
            uf: req.uf,
            complemento: req.complemento,
            ddd: req.ddd,
        })
        callback(null, {"statuscode": 200, "message": "Data inserted successfully"});
    }
} */

module.exports = {
    saveData: function(req, callback){
        firebase.database().ref("teste").set({
            "teste": 123,
        })
        callback(null, {"statuscode": 200, "message": "Data inserted successfully"});
    }
}