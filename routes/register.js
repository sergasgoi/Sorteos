var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')

router.get('/', async function (req, res, next) {

    res.render('register', {
        layout: 'layout',
    });

});

router.post('/', async function (req, res, next) {

    try {
        if (req.body.usuario != "" && req.body.contraseña != "") {

            const usr = await consultas.getUsuario(req.body.usuario);
            if (usr[0].total === 0) {
                await consultas.agregarUsuario(req.body.usuario, req.body.contraseña);
                res.redirect('/')
            } else {
                res.render('register', {
                    layout: 'layout',
                    error2: true,
                    message: 'El nombre de usuario ya existe',
                });
            }

        } else {
            res.render('register', {
                layout: 'layout',
                error2: true,
                message: 'Todos los campos son requeridos',
            });
        }
    } catch (error) {
        console.log(error);
        res.render('register', {
            layout: 'layout',
            error2: true,
            message: 'No se cargo',
        });
    }
});

module.exports = router;