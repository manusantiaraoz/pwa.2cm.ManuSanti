const express= require('express');
const app = express();
//const port= 4000; declaramos 4000 porque 3000 es dondes se usa el front y nostros en el back usamos este
require('dotenv').config({path: './config/.env'});
const port = process.env.PORT_SERVER || 4500

const home = require('./router/home');
const servicios= require('./router/servicios');


app.use('/', home);
app.use('/servicios', servicios);

app.listen(port, ()=>{
    console.log (`server andando en port ${port}`)
}); 
//a