const bd = require ("../utils/bd");

const getAll = () => bd('proveedores').where({'eliminado': 0}).select();
const create = (obj) => bd ('proveedores').insert(obj);
const getSingle = (id) => bd ('proveedores').where({'id':id, 'eliminado': 0}).select('mail');
const update = (id, obj) => bd ('proveedores').where({'id': id}).update(obj);
const del= (id) => bd ('proveedores').where({'id': id}).update({'eliminado': 1, 'habilitado': 0})

module.exports= {getAll, create, getSingle, update, del}