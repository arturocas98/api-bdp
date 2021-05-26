const mongoose = require("mongoose");

const verificaUsuarioSchema = mongoose.Schema({
  Canal: {
    type: String,
  },
  IdAplicacion: {
    type: String,
  },
  IdOrganizacion: {
    type: String,
  },
  IdUsuario: {
    type: String,
  },
  Maquina: {
    type: String,
  },
  Otros: {
    type: String,
  },
  RecContable: {
    type: String,
  },
  RecRoles: {
    type: String,
  },
  RecupPerfil: {
    type: String,
  },
  RetConexion: {
    type: String,
  },
  Switch: {
    type: String,
  },
  Token: {
    type: String,
  }
});

module.exports = mongoose.model("VerificarUsuario", verificaUsuarioSchema);
