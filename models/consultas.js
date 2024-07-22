var pool = require('./bd');
var md5 = require('md5')


async function getUser(user, password){
    try{
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var datos = await pool.query(query, [user, md5(password)]);
        return datos[0];
    }catch(error){
        console.log(error);
    }

}

async function getSorteo(sort, idu) {

    var query = 'SELECT COUNT(*) as total FROM sorteos where sorteo=? and id_usuario=?';
    var datos = await pool.query(query, [sort, idu]);
    return datos;

}

async function getSort() {

    var query = 'select * from sorteos';
    var datos = await pool.query(query);
    return datos;

}

async function getMensajes(id) {

    var query = 'select * from mensajes where id_usuario3=? order by id ASC';
    var datos = await pool.query(query,[id]);
    return datos;

}

async function getUserById(id) {

    var query = 'select * from usuarios where id=?';
    var datos = await pool.query(query, [id]);
    return datos[0];

}

async function getSorteos(id) {

    var query = 'select * from sorteos where id_usuario=?';
    var datos = await pool.query(query, [id]);
    return datos;

}

async function getnSorteos(sort, idus) {

    var query = 'select * from nsorteos where sorteo=? and id_usuario2=? order by participante asc';
    var datos = await pool.query(query, [sort, idus]);
    return datos;

}

async function getSorteosById(id) {

    var query = 'select * from nsorteos where id_nsort=?';
    var datos = await pool.query(query, [id]);
    return datos[0];

}

async function editSorteos(obj, id) {

    var query = 'update nsorteos set ? where id_nsort=?';
    var datos = await pool.query(query, [obj, id]);
    return datos;

}

async function deleteSorteos(sorteo, id_usuario) {
    var query = 'delete from sorteos where sorteo=? and id_usuario=?';
    var datos = await pool.query(query, [sorteo, id_usuario]);
    return datos;
}

async function deleteMensajes(id) {
    var query = 'delete from mensajes where id=?';
    var datos = await pool.query(query, [id]);
    return datos;
}

async function deletenSorteos(sorteo, id_usuario) {
    var query = 'delete from nsorteos where sorteo=? and id_usuario2=?';
    var datos = await pool.query(query, [sorteo, id_usuario]);
    return datos;
}

async function updateSorteos(id) {
    var query = 'UPDATE nsorteos SET nombre = "", apellido = "", telefono = "", condicion = 0 WHERE id_nsort = ?';
    var datos = await pool.query(query, [id]);
    return datos;
}

async function agregarSorteos(sort, id_us, user) {

    var query = 'insert into sorteos(sorteo, id_usuario, usuario) values(?, ?, ?)';
    var datos = await pool.query(query, [sort, id_us, user]);
    return datos;
}

async function agregarnSorteos(array) {

    var query = 'insert into nsorteos values?';
    var datos = await pool.query(query,[array]);
    return datos;
    
}
async function agregarMensaje(array) {

    var query = 'insert into mensajes values?';
    var datos = await pool.query(query,[array]);
    return datos;
    
}

async function agregarUsuario(us, cont) {

    var query = 'insert into usuarios values(null, ?, ?)';
    var datos = await pool.query(query, [us, md5(cont)]);
    return datos;
}

async function getUsuario(id) {

    var query = 'SELECT COUNT(*) as total FROM usuarios where usuario=?';
    var datos = await pool.query(query, [id]);
    return datos;

}

module.exports = { getUser, getSorteo, getSorteos, getnSorteos, getSorteosById, editSorteos, deleteSorteos, updateSorteos, agregarSorteos, agregarnSorteos, deletenSorteos, agregarUsuario, getUsuario ,getSort, getUserById, getMensajes, agregarMensaje, deleteMensajes};