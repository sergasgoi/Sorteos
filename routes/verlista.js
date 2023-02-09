var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/:sorteo', async function (req, res, next){


    const verlista = await consultas.getnSorteos(req.params.sorteo, req.session.id_usuario);


    res.render('verlista', {
        layout: 'layout2',
        usuario:req.session.nombre,
        verlista

    });

});


module.exports = router;