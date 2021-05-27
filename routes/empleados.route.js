const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/empleado.controller');
router.get('/',EmpleadoController.getEmpleados);
router.post('/createEmpleado',EmpleadoController.createEmpleado);
router.post('/registrarUsuario',EmpleadoController.registraUsuario);
router.post('/verificarUsuario',EmpleadoController.verificarUsuario);
router.get('/:username',EmpleadoController.getEmpleado);
router.put('/:id',EmpleadoController.editEmpleado);
router.delete('/:id',EmpleadoController.deleteEmpleado);


module.exports = router;