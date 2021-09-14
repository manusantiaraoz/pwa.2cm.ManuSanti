const express = require('express');
const router= express.Router();
const usuarioController = require('../controladores/usuarioController')



router.post('/', usuarioController.crearUsuario)

module.exports= router