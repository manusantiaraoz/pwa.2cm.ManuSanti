const express = require('express');
const router= express.Router();
const usuarioController = require('../controladores/usuarioController')
const {check}= require('express-validator');

//vamos a implementar el express validator, se hace entre entre la ruta y el controlador, abriendo un array

router.post('/',
[
    check('nombre', 'campo nombre obligatorio').not().isEmpty(),
    check('apellido', 'campo apellido obligatorio').not().isEmpty(),
    check('email', 'email invalido').isEmail(),
    check('pass', 'el password debe tener almentos 6 caracteres').isLength({min: 6, max:12}),
    
], 
usuarioController.crearUsuario)

module.exports= router