const Curso = require('../models/Curso');

const getCursos = (req,res,next) => {
    const query = req.query || {};

    Curso.find(query)
        .then(cursos => {
            res.status(200).json   ({
                code:0,
                message: cursos
            }
            )
        })
};

const getCurso = (req,res,next) => {
    const id = req.params.id;

    Curso.findById(id)
        .then(curso => {
            if(!curso){
                res.status(404).json({
                    code: 12,
                    message: "No encontramos el curso"
                })
            } else {
                res.status(200).json({
                    code: 0,
                    message: curso
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurro quilombo"
            });
        })
}

const postCurso = (req,res,next) => {
    const body = req.body;

    const nuevoCurso = new Curso({
        anio: body.anio, 
        duracion: body.duracion,
        tema: body.tema, 
        clientes: body.clientes

    });

    nuevoCurso.save()
        .then(created => {
            res.status(201).json({
                code: 0,
                message: created
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20, 
                message: "Hubo un error"
            });
        })
};

const deleteCurso = (req,res,next) => {
    const id = req.params.id;

    Curso.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({
                code: 0,
                message: "El curso ha sido terminado"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code:20, 
                message:"Mistakes were made"
            });
        })
};

module.exports = {getCursos,postCurso,deleteCurso, getCurso};