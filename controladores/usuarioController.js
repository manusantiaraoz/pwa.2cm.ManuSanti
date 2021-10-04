const Usuario = require('../models/usuario');
const bcryptjs= require('bcryptjs');
const {validationResult} = require('express-validator');
// para manejar la sesiones, vamos a usar jsonwebtoken
const jwt = require('jsonwebtoken')





exports.crearUsuario= async (req, res) =>{
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status (400).json({errores: error.array()}) 
    }
    try{
        const {email, pass} = req.body;
        let usuario = await Usuario.findOne({ email });
//con este if, lo que vamos a hacer es marcar el error si es que el imail se repite que lo usamos con el findOne
       if (usuario) {
           return res.status(400).json({ message: 'el usuario ya esta registrado' })
       }

       usuario = new Usuario(req.body);
       //primero antes de encriptar, tenemos que hacer un salt, donde vamos a requerir el bcryptjs
       const salt = await bcryptjs.genSalt(10)
        //ahora lo que toca es reescribir el pass, o sea pasar el encriptado 
        usuario.pass = await bcryptjs.hash(pass, salt)
         await usuario.save();
       //aqui vamos a crar el jwt y firmarlo
       const payload= {
                        usuario:{
                               id: usuario.id,
                              }
                     }
        //firmar
            jwt.sign(payload, process.env.SECRET, {
                expiresIn: 3600 
            }, (error, token) => {
                console.log(token)
                if (error) throw error;
                res.json({token: token})
            })

    

    } catch(e){
        console.log(e)
        res.status(400).send("error al guardar")
    }
}