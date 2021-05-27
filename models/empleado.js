const mongoose = require("mongoose");
const { Schema } = mongoose;
const empleado_schema = new Schema({
  numeroEmpleado: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  nombresEmpleado: { type: String },
  apellidosEmpleado: { type: String},
  nombresCompleto: { type: String },
  codigoOrganigrama: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  descripcionOrganigrama: { type: String, default: "DESARROLLO TI TACTICO"},
  codigoEmpresa: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  codigoLocalidad: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  descripcionLocalidad: { type: String, default: "Guayaquil"},
  codigoLocalidadUbicacion: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  codigoEdificio: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  descripcionEdificio: { type: String, default: "Edificio Cordova - Piso 2"},
  codigoAgencia: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  descripcionAgencia: { type: String, default: "Guayaquil-Principal"},
  piso: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 2)
      .toString(),
  },
  extension: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 5)
      .toString(),
  },
  telefonoTrabajo: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 10)
      .toString(),
  },
  estadoEmpleado: {
    type: String,
    default: "A"
  },
  codigoOperativoIdentificacion: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 2)
      .toString(),
  },
  descripcionCargo: {
    type: String,
    default: "Empleado",
  },
  codigoZona: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 5)
      .toString(),
  },
  codigoArea: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  descripcionArea: {
    type: String,
    default:"MEDIOS TECNOLOGICOS",
  },
  codigoDepartamento: {
    type: String,
    default: Math.floor(Math.random() * 100000)
      .toString()
      .substring(0, 3)
      .toString(),
  },
  descripcionDepartamento: {
    type: String,
    default: "INFRAESTRUCTURA DE SEGURIDAD",
  },
  usuarioMedico: {
    type: String,
    default: null,
  },
  usuarioRRHH: {
    type: String,
    default: null,
  },
  usuarioSeguridadBancaria: {
    type: String,
    default: null,
  },
  username: { type: String },
  
});
module.exports = mongoose.model("empleado", empleado_schema);
