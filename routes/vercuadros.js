var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/:sorteo', async function (req, res, next) {

    var vercuadros = await consultas.getnSorteos(req.params.sorteo, req.session.id_usuario);


    res.render('vercuadros', {
        layout: 'layout2',
        usuario: req.session.nombre,
        vercuadros
    });


});


module.exports = router;