const mongoose = require('mongoose');


 const usuarioSchema = mongoose.Schema({
        nombre:{
            type: 'string',
            require: true,
            trim: true,
        },
        apellido: {
            type: 'string',
            require: true,
            trim: true,
        },
        email: {
            type: 'string',
            require: true,
            trim: true,
            unique: true,
        },
        pass:{
            type: 'string',
            require: true,
            trim: true,
        },
        registro: {
            type: Date,
            default: Date.now(),
        },
 });

 

 module.exports = mongoose.model('usuario',usuarioSchema);