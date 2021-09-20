const bd = require ("../utils/bd");

const getAll = () => bd('productos').where({'eliminado': 0}).select();
const create = (obj) => bd ('productos').insert(obj);
const getSingle = (id) => bd ('productos').where({'id':id, 'eliminado': 0}).select('nombre', 'precio', 'stock');
const update = (id, obj) => bd ('productos').where({'id': id}).update(obj);
const del= (id) => bd ('productos').where({'id': id}).update({'eliminado': 1})

module.exports= {getAll, create, getSingle, update, del}