
const express = require('express');
const mongoose = require('mongoose');

const clientesRouter = require('./clientesCRUD/clientesRouter')

const app = express()
const port = process.env.port || 8080;

app.use(bodyParser.json());

app.use('/clientes',clientesRouter)

app.use('/',(req,res,next) => {res.status(200).json({code: 0, message: "Estas en la pagina de inicio"})});

const mongoURI = process.env.mongoURI || "mongodb://localhost:27017/clientes";

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        app.listen(port, () => {console.log(`Corriendo en port ${port}`)})
    })
    .catch(err => {
        console.log(err);
    })
