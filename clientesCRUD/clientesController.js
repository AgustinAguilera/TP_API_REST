const Curso = require('../models/Curso');


const getClientes = (req,res,next) => {
    const id = req.params.id;
    
    Curso.findById(id)
        .then(curso => {
            if(!curso) {
                res.status(404).json({
                    code: 12,
                    message: "No se encontro el curso"
                });
            }else {
                res.status(200).json({
                    code: 0,
                    message: curso.clientes
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Hubo un error interno"
            });
        });

};


const getDestacado = (req,res,next) => {
    const id = req.params.id;
    
    Curso.findById(id)
        .then(curso => {
            if(!curso) {
                res.status(404).json({
                    code: 12,
                    message: "Recurso no encontrado"
                });
            }else {
                let clientes = curso.clientes;
                let notaMaxima = Math.max.apply(Math,clientes.map(function(o){return o.nota;}))
                let destacado = clientes.find(function(o){ return o.nota == notaMaxima; })
                res.status(200).json({
                    code: 0,
                    message: destacado
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Hubo un errror interno"
            });
        });

};

module.exports = { getClientes, getDestacado }