const knex = require ('knex')({
    client: 'mysql',
    connection:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pwi2021tm',
        pool: {min:1, max:10}
        }
   });
module.exports= knex;