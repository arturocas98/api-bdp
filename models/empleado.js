const mongoose = require('mongoose');
const { Schema} = mongoose;

const empleado_schema = new Schema({
    numeroEmpleado :{ type: String, required: true },
    nombresEmpleado :{ type: String, required: true },
    apellidosEmpleado :{ type: String, required: true },
    nombresCompleto :{ type: String, required: true },
    codigoOrganigrama :{ type: String, required: true },
    descripcionOrganigrama :{ type: String, required: true },
    codigoEmpresa :{ type: String, required: true },
    codigoLocalidad :{ type: String, required: true },
    descripcionLocalidad :{ type: String, required: true },
    codigoLocalidadUbicacion :{ type: String, required: true },
    codigoEdificio :{ type: String, required: true },
    descripcionEdificio :{ type: String, required: true },
    codigoAgencia :{ type: String, required: true },
    descripcionAgencia :{ type: String, required: true },
    piso :{ type: String, required: true },
    username :{ type: String, required: true },

});

module.exports = mongoose.model('empleado',empleado_schema);