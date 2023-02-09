var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/', async function (req, res, next) {


    var mensajes = await consultas.getMensajes(req.session.id_usuario);

    res.render('mensajes', {
        layout: 'layout2',
        usuario: req.session.nombre,
        mensajes
    });

});


router.get('/delete/:id', async function (req, res, next) {

    await consultas.deleteMensajes(req.params.id);

    var mensajes = await consultas.getMensajes(req.session.id_usuario);

    res.render('mensajes', {
        layout: 'layout2',
        usuario: req.session.nombre,
        mensajes
    });

});


module.exports = router;