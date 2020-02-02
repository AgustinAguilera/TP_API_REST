const cursosRouter = require('express').Router();

const {getCursos, getCurso, postCurso,deleteCurso} = require('../cursosCRUD/cursosController');
const { getClientes, getDestacado } = require('../clientesCRUD/clientesController');
cursosRouter.get('/',getCursos);
cursosRouter.get('/:id',getCurso);
cursosRouter.post('/',postCurso);
cursosRouter.delete('/:id',deleteCurso);

cursosRouter.get('/:id/cliente',getClientes);

cursosRouter.get('/:id/destacado',getDestacado);


module.exports = cursosRouter;