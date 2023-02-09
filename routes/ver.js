var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/', async function (req, res, next) {


    var sorteos = await consultas.getSorteos(req.session.id_usuario);

    res.render('ver', {
        layout: 'layout2',
        usuario: req.session.nombre,
        sorteos,

    });

});





module.exports = router;