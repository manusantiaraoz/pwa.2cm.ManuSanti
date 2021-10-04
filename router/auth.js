const express = require('express');
const router = express.Router();
const {check} = require ('express-validator');
const authcontroller = require('../controladores/authcontroller')

router.post('/',
[
    check('email', 'agregar un email valido').isEmail(),
    check('pass', 'el pass debe tener minimo 6 caracteres').isLenght({min: 6}),
],
authcontroller.autenticarUsuario
)



module.exports = router


