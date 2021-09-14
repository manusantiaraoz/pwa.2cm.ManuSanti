const express= require('express');
const app = express();
const DB = require('./config/db');
//const port= 4000; declaramos 4000 porque 3000 es dondes se usa el front y nostros en el back usamos este
require('dotenv').config({path: './config/.env'});
const port = process.env.PORT_SERVER || 4500



//funcion de la base de datos
DB()


//traigo las rutas al index
const home = require('./router/home');
const servicios= require('./router/servicios');
const posteos= require('./router/posteos');
const usuarios = require('./router/usuarios');


//lector de json
app.use(express.json({extend: true}))



//declaro las rutas que vamos a usar-
app.use('/api', home);
app.use('/api/servicios', servicios);
app.use('/api/posteos', posteos);
app.use('/api/usuarios', usuarios);

app.listen(port, ()=>{
    console.log (`server andando en port ${port}`)
}); 
