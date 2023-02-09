var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/:sorteo&:us', async function (req, res, next){

    var vercuadros = await consultas.getnSorteos(req.params.sorteo, req.params.us);

    if(req.session.id_usuario){
        res.render('versorteos', {
            layout: 'layout2',
            usuario:req.session.nombre,
            vercuadros
        });

    }else{
        res.render('versorteos', {
            layout: 'layout',
            usuario:req.session.nombre,
            vercuadros
        });
    }
    

});


module.exports = router;