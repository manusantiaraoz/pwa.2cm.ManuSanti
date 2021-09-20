const express= require('express');
const router= express.Router();
const model= require('./../models/proveedores');


const get = (req, res) => {
    model.getAll()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
    }

const post = (req, res) =>{
    model.create(req.body)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
}
const single = (req, res) =>{
    model.getSingle(req.params.id)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
}

const update = (req, res) =>{
    model.update(req.params.id, req.body)
    .then((response) => res.status(200).json(response))
    .catch ((err) =>res.status(500).json(err))
}
const delate = (req, res) =>{
    model.del (req.params.id)
    .then((response) => res.status(200).json(response))
    .catch ((err) =>res.status(500).json(err))
}

router.get('/', get);
router.get ('/single/:id', single)
router.post('/create', post);
router.post('/mod/:id', update)
router.post ('/del/:id', delate)
module.exports= router