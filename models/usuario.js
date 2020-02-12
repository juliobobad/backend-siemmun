var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUES} no es un rol valido'
};

var usuarioSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    email: { type: String, unique: true, required: [true, 'El email es obligatorio'] },
    password: { type: String, required: [true, 'La contrasenia no puede ser nula'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'ADMIN_ROLE', enum: rolesValidos }

});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema);