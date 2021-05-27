const mongoose = require("mongoose");

const registraUsuarioSchema = mongoose.Schema({
    Clave: { type: String },
    LastLogon: { type: String },
    Maquina: { type: String },
    Sesion: { type: String },
    Usuario: { type: String },
});

module.exports = mongoose.model("RegistraUsuario", registraUsuarioSchema);
