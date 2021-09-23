const bd = require('../utils/bd');

const getAll = () => bd('usuarios').where({'eliminado': 0}).select();
const create = (obj) => bd ('usuarios').insert(obj);
const loged= (nombre, pass) => bd('usuarios').where({'pass': pass, 'nombre': nombre}).select('nombre', 'pass', 'dirección');


module.exports= {getAll, create, loged}