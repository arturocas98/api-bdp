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
  nombresEmpleado: { type: String, default: generateName() },
  apellidosEmpleado: { type: String, default: GenerateLastName() },
  nombresCompleto: { type: String, default: generateFullName() },
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
  Clave: { type: String },
  LastLogon: { type: String },
  Maquina: { type: String },
  Sesion: { type: String },
  Usuario: { type: String },
});

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
  var name1 = [
    ,
    "Santiago",
    "Sebastián",
    "Diego",
    "Nicolás",
    "Samuel",
    "Alejandro",
    "Daniel",
    "Mateo",
    "Ángel",
    "Matías",
    "Gabriel",
    "Tomás",
    "David",
    "Emiliano",
    "Andrés",
    "Joaquín",
    "Carlos",
    "Alexander",
    "Adrián",
    "Lucas",
    "Benjamín",
    "Leonardo",
    "Rodrigo",
    "Felipe",
    "Francisco",
    "Pablo",
    "Martín",
    "Fernando",
    "Isaac",
    "Manuel",
    "Juan",
    "Pablo",
    "Emmanuel",
    "Emilio",
    "Vicente",
    "Eduardo",
    "Juan",
    "Javier",
    "Jorge",
    "Aaron",
    "José",
    "Erick",
    "Luis",
    "Cristian",
    "Ignacio",
    "Christopher",
    "Jesús",
    "Kevin",
    "Juan",
    "José",
    "Agustín",
    "Juan",
    "David",
    "Simón",
    "Joshua",
    "Maximiliano",
    "Miguel",
    "Ángel",
    "Juan",
    "Sebastián",
    "Bruno",
    "Iván",
    "Gael",
    "Thiago",
    "Jerónimo",
    "Hugo",
    "Ricardo",
    "Antonio",
    "Ian",
    "Anthony",
    "Pedro",
    "Rafael",
    "Jonathan",
    "Esteban",
    "Juan",
    "Manuel",
    "Julián",
    "Mauricio",
    "Oscar",
    "Santino",
    "Axel",
    "Sergio",
    "Guillermo",
    "Matthew",
    "Valentín",
    "Bautista",
    "Álvaro",
    "Dylan",
    "Marcos",
    "Kimberly",
    "Luciano",
    "Mario",
    "César",
    "Cristóbal",
    "Luca",
    "Iker",
    "Andrés",
    "Gonzalo",
    "Roberto",
    "Facundo",
    "Patricio",
    "Diego",
    "Alejandro",
    "Josué",
    "Franco",
    "Jeremías",
    "Primitivo",
  ];

  var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
  return name;
}

function GenerateLastName() {
  var name2 = [
    "Zambrano",
    "Sanchez",
    "García",
    "Vera",
    "Lopez",
    "Cedeño",
    "Torres",
    "Rodriguez",
    "Cabrera",
    "Morocho",
    "Verdezoto",
    "Gaibor",
    "Guamán",
    "Calle",
    "Gonzaléz",
    "Rosero",
    "Pozo",
    "Enriquez",
    "Benavides",
    "Topanta",
    "Chicaiza",
    "Lema",
    "Daquilema",
    "Caicedo",
    "Zambrano",
  ];

  var lastName = capFirst(name2[getRandomInt(0, name2.length + 1)]);
  return lastName;
}

function generateFullName() {
  var name1 = [
    ,
    "Santiago",
    "Sebastián",
    "Diego",
    "Nicolás",
    "Samuel",
    "Alejandro",
    "Daniel",
    "Mateo",
    "Ángel",
    "Matías",
    "Gabriel",
    "Tomás",
    "David",
    "Emiliano",
    "Andrés",
    "Joaquín",
    "Carlos",
    "Alexander",
    "Adrián",
    "Lucas",
    "Benjamín",
    "Leonardo",
    "Rodrigo",
    "Felipe",
    "Francisco",
    "Pablo",
    "Martín",
    "Fernando",
    "Isaac",
    "Manuel",
    "Juan",
    "Pablo",
    "Emmanuel",
    "Emilio",
    "Vicente",
    "Eduardo",
    "Juan",
    "Javier",
    "Jorge",
    "Aaron",
    "José",
    "Erick",
    "Luis",
    "Cristian",
    "Ignacio",
    "Christopher",
    "Jesús",
    "Kevin",
    "Juan",
    "José",
    "Agustín",
    "Juan",
    "David",
    "Simón",
    "Joshua",
    "Maximiliano",
    "Miguel",
    "Ángel",
    "Juan",
    "Sebastián",
    "Bruno",
    "Iván",
    "Gael",
    "Thiago",
    "Jerónimo",
    "Hugo",
    "Ricardo",
    "Antonio",
    "Ian",
    "Anthony",
    "Pedro",
    "Rafael",
    "Jonathan",
    "Esteban",
    "Juan",
    "Manuel",
    "Julián",
    "Mauricio",
    "Oscar",
    "Santino",
    "Axel",
    "Sergio",
    "Guillermo",
    "Matthew",
    "Valentín",
    "Bautista",
    "Álvaro",
    "Dylan",
    "Marcos",
    "Kimberly",
    "Luciano",
    "Mario",
    "César",
    "Cristóbal",
    "Luca",
    "Iker",
    "Andrés",
    "Gonzalo",
    "Roberto",
    "Facundo",
    "Patricio",
    "Diego",
    "Alejandro",
    "Josué",
    "Franco",
    "Jeremías",
    "Primitivo",
  ];

  var name2 = [
    "Zambrano",
    "Sanchez",
    "García",
    "Vera",
    "Lopez",
    "Cedeño",
    "Torres",
    "Rodriguez",
    "Cabrera",
    "Morocho",
    "Verdezoto",
    "Gaibor",
    "Guamán",
    "Calle",
    "Gonzaléz",
    "Rosero",
    "Pozo",
    "Enriquez",
    "Benavides",
    "Topanta",
    "Chicaiza",
    "Lema",
    "Daquilema",
    "Caicedo",
    "Zambrano",
  ];

  var fullName =
    capFirst(name1[getRandomInt(0, name1.length + 1)]) +
    ""+
    capFirst(name2[getRandomInt(0, name2.length + 1)]);
  return fullName;
}

module.exports = mongoose.model("empleado", empleado_schema);
