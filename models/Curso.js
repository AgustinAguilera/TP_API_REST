const mongoose = require('mongoose');
const Cliente = require('./Cliente');

const Curso = new mongoose.Schema({
    anio : { type: Number}, 
    duracion : {type : Number}, 
    tema : {type : String },
    clientes: {type: [Cliente]}
}, {collection : 'cursos'});

module.exports = mongoose.model('Curso',Curso);