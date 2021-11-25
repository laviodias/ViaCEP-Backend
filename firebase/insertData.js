const firebase = require('./firebase_connect');

module.exports = {
    saveData: function (req, callback){
        const db = firebase.database();

        db.ref(`${req.result.cep}`).set({
            cep: req.result.cep,
            localidade: req.result.localidade,
            logradouro: req.result.logradouro,
            bairro: req.result.bairro,
            uf: req.result.uf,
            complemento: req.result.complemento,
            ddd: req.result.ddd,
        })
        callback(null, {"statuscode": 200, "message": "Data inserted successfully"});
    }
}