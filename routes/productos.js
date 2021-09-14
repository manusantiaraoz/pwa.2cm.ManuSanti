const express= require('express');
const router= express.Router();
const model= require('./../models/productos');


const get = (req, res) => {
    module.getAll()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err))
    }


    router.get('/', get);
module.exports= router