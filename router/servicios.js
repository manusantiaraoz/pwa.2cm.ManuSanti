const express= require ('express');
const router= express.Router();

router.get('/', (req, res)=>{
    res.send(`funcionando servicios`)
});

module.exports= router
