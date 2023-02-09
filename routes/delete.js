var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')

router.get('/:id&:sorteo', async function (req, res, next) {

    await consultas.updateSorteos(req.params.id);

    const verlista = await consultas.getnSorteos(req.params.sorteo, req.session.id_usuario);
    res.render('verlista', {
        layout: 'layout2',
        usuario:req.session.nombre,
        verlista
    });

});

module.exports = router;