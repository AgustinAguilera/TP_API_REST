require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cursosRouter = require('./cursosCRUD/cursosRouter');

const app = express()
const port = process.env.port || 8081;

app.use(bodyParser.json());

app.use('/cursos',cursosRouter);

app.use('/',(req,res,next) => {res.status(200).json({code: 0, message: "Bienvenido a mi API REST"})});

const mongoURI = process.env.mongoURI || "mongodb://localhost:27017/cursos";

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        app.listen(port, () => {console.log(`Corriendo en port ${port}`)})
    })
    .catch(err => {
        console.log(err);
    })
