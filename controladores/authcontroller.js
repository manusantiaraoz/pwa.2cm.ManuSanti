const Usuario= require('../models/usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
 
 
exports.autenticarUsuario = async (req, res, next) =>{
    //control de errores
    const errores= validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({error: errores.array()})
    }
    const{email, pass} = req.body;
    try{
        let usuario = await Usuario.findOne({email})
        if(!usuario){
            return res.status(400).json({msg: 'el usuario no existe'})
        }
        //revisamos si la contraseña es correcta
        const passValidation = await bcryptjs.compare(pass, usuario.pass);
        if(!passValidation){
            return res.status(400).json({msg: 'pass incorrecto'})
        }
        //creamos el token
        const payload = {
            usuario:{
                id: usuario.id
            }
        }
        jwt.sign(payload, process.env.SECRET,{
            expiresIn: 3000
        }, (error, token) =>{
            if(error) throw error;
            res.json({token})
        })

    }catch(e) {
        console.log(e);
    }

}