const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    // email: {
    //     type: String,
    //     required: true,
    //     min: 6,
    //     max: 1024
    // },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    client_secret:{
        type: String,
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Usuario', userSchema);
