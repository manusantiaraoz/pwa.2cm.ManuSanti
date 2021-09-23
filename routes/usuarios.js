const express = require('express');
const router = express.Router();
const model = require('../models/usuarios')

/* GET users listing. */
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

const login = async (req, res) =>{
  try{
let {nombre, pass}= req.body;
 
const users =await  model.loged(nombre, pass) 
    users.forEach(element => {
     if (element.nombre === nombre && element.pass === pass){
       res.send('logeado') 
     } 
    });

  } 
  catch(err) {
    console.log(err);
    res.status(500).json(err)
  }
}

router.get('/', get);
router.post('/create', post);
router.post('/login', login);


module.exports = router;
