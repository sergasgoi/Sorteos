var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/:sorteo', async function (req, res, next) {


    var sorteo = req.params.sorteo;
    var id_usuario = req.session.id_usuario;
    await consultas.deleteSorteos(sorteo, id_usuario);
    await consultas.deletenSorteos(sorteo, id_usuario);

    var sorteos = await consultas.getSorteos(req.session.id_usuario);
    res.render('ver', {
        layout: 'layout2',
        usuario: req.session.nombre,
        sorteos
    });

    
})



module.exports = router;