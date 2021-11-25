const firebase = require('firebase/app');

const firebaseConfig = {
  apiKey: "AIzaSyCHDEjRnCJqIluIwaLn4YuCCwaj4hQ9nio",
  authDomain: "viacep-e0015.firebaseapp.com",
  projectId: "viacep-e0015",
  storageBucket: "viacep-e0015.appspot.com",
  messagingSenderId: "629301592712",
  appId: "1:629301592712:web:1297ba0ece316273f5153d"
};

const app = firebase.initializeApp(firebaseConfig);

module.exports = {
    saveData: function(req, callback){
        app.database().ref(`${req.cep}`).set({
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