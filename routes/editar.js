var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/:id', async function (req, res, next) {


    const edit = await consultas.getSorteosById(req.params.id);

    res.render('editar', {
        layout: 'layout2',
        usuario: req.session.nombre,
        edit
    });

});

router.post('/', async function (req, res, next) {

    try {
        if (req.body.nombre != "" && req.body.apellido != "" && req.body.telefono != "") {

            req.body.condicion = true;
            await consultas.editSorteos(req.body, req.body.id_nsort);

            const verlista = await consultas.getnSorteos(req.body.sorteo, req.session.id_usuario);
            res.render('verlista', {
                layout: 'layout2',
                usuario: req.session.nombre,
                verlista
            });

        } else {
            const edit = await consultas.getSorteosById(req.body.id_nsort);
            res.render('editar', {
                layout: 'layout2',
                error: true,
                message: 'Todos los campos son requeridos',
                usuario: req.session.nombre,
                edit
            });
        }
    } catch (error) {
        console.log(error);
        const edit = await consultas.getSorteosById(req.body.id_nsort);
        res.render('editar', {
            layout: 'layout2',
            error: true,
            message: 'No se edito',
            usuario: req.session.nombre,
            edit
        });
    }

});




module.exports = router;