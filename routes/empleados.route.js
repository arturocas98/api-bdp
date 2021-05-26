const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/empleado.controller');
router.get('/',EmpleadoController.getEmpleados);
router.post('/registrarUsuario',EmpleadoController.createEmpleado);
router.post('/verificarUsuario',EmpleadoController.verificarUsuario);
router.get('/:username',EmpleadoController.getEmpleado);
router.put('/:id',EmpleadoController.editEmpleado);
router.delete('/:id',EmpleadoController.deleteEmpleado);


module.exports = router;