const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
    nombre : {type: String},
    apellido: {type: String}, 
    dni: {type: Number}, 
    direccion: {type: String},
    nota : {type : Number}
});

module.exports = Cliente; 