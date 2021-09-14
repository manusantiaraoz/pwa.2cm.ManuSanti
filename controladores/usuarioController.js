const Usuario = require('../models/usuario')


exports.crearUsuario= async (req, res) =>{
    console.log('viene del body=', req.body);
    try{
        let usuario;

        usuario = new Usuario(req.body);
         await usuario.save();
         res.send("usuario agregado")

    } catch(e){
        console.log(e)
        res.status(400).send("error al guardar")
    }
}