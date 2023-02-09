var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')

router.get('/', async function (req, res, next) {

    res.render('agregar', {
        layout: 'layout2',
        usuario: req.session.nombre
    });

});

router.post('/', async function (req, res, next) {

    try {
        if (req.body.sorteo != "" && req.body.numero != "") {

            const sort = await consultas.getSorteo(req.body.sorteo, req.session.id_usuario);
            if (sort[0].total === 0) {

                var num = req.body.numero;
                let array = []
                for (let i = 1; i <= num; i++) {
                    array.push([null, i, false, null, null, null, req.body.sorteo, req.session.id_usuario])
                }
                let user = await consultas.getUserById(req.session.id_usuario)
                await consultas.agregarSorteos(req.body.sorteo, req.session.id_usuario, user.usuario);
                await consultas.agregarnSorteos(array);

                var sorteos = await consultas.getSorteos(req.session.id_usuario);
                res.render('ver', {
                    layout: 'layout2',
                    usuario: req.session.nombre,
                    sorteos
                });

            } else {

                res.render('agregar', {
                    layout: 'layout2',
                    error: true,
                    message: 'Ya existe un sorteo con ese nombre',
                    usuario: req.session.nombre
                });

            }

        } else {
            res.render('agregar', {
                layout: 'layout2',
                error: true,
                message: 'Todos los campos son requeridos',
                usuario: req.session.nombre
            });
        }
    } catch (error) {
        console.log(error);
        res.render('agregar', {
            layout: 'layout2',
            error: true,
            message: 'No se Agrego',
            usuario: req.session.nombre
        });
    }
});

module.exports = router;