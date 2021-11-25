const firebase = require('./firebase_connect');

module.exports = {
    saveData: function (req, callback){
        const db = firebase.database();

        db.ref(`${req.cep}`).set({
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
}