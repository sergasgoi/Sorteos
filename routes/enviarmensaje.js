var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')

router.get('/:id', async function (req, res, next) {


    var sort = await consultas.getSorteosById(req.params.id);

    if(req.session.id_usuario){
        res.render('enviarmensaje', {
            layout: 'layout2',
            usuario: req.session.nombre,
            sort
        });
    }else{
        res.render('enviarmensaje', {
            layout: 'layout',
            usuario: req.session.nombre,
            sort
        });
    }

    

});

router.post('/', async function (req, res, next) {

    try {
        if (req.body.remitente != "" && req.body.email != "" && req.body.mensaje != "") {
            let array = [];
            array.push([null, req.body.sorteo, req.body.participante, req.body.remitente, req.body.email, req.body.mensaje, req.body.id_usuario2])
            await consultas.agregarMensaje(array);
            res.redirect('/');

        } else {

            var sort = await consultas.getSorteosById(req.body.id_nsort);
           
            if(req.session.id_usuario){
                res.render('enviarmensaje', {
                    layout: 'layout2',
                    error2: true,
                    message: 'Complete todos los campos',
                    usuario: req.session.nombre,
                    sort
                });
            }else{
                res.render('enviarmensaje', {
                    layout: 'layout',
                    error2: true,
                    message: 'Complete todos los campos',
                    usuario: req.session.nombre,
                    sort
                });
            }
        }

    } catch (error) {
        console.log(error);
        var sort = await consultas.getSorteosById(req.body.id_nsort);
        
        if(req.session.id_usuario){
            res.render('enviarmensaje', {
                layout: 'layout2',
                error2: true,
                message: 'No se pudo enviar el mensaje',
                usuario: req.session.nombre,
                sort
            });
        }else{
            res.render('enviarmensaje', {
                layout: 'layout',
                error2: true,
                message: 'No se pudo enviar el mensaje',
                usuario: req.session.nombre,
                sort
            });
        }
    }
});



module.exports = router;