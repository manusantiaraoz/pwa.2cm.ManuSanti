const Usuario = require('../models/usuario')


//buscamos extraer el mail y el pass
//validar el registro del//utilizar findOne()
//retornar respuesta de la api para ver si es o no valida
//encriptar el pass con bcryptjs 


exports.crearUsuario= async (req, res) =>{
    console.log('viene del body=', req.body);
    try{
        const {email, pass} = req.body;
        console.log(email, pass)
        let usuario;
        usuario = new Usuario(req.body);
         await usuario.save();
         res.send("usuario agregado")

    } catch(e){
        console.log(e)
        res.status(400).send("error al guardar")
    }
}