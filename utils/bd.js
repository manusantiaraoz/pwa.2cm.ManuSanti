const knex = require ('knex')({
    client: 'mysql',
    connection:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mi base',
        pool: {min:1, max:10}
        }
   });
module.exports=knex