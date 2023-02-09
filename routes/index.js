var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/', async function (req, res, next) {
  
  if (req.session.id_usuario) {
    
    res.render('index', {
      layout: 'layout2',
      usuario: req.session.nombre,
    });
  } else {
    res.render('index', {
      layout: 'layout'
    });

  }

});


router.get('/salir', function (req, res, next) {
  req.session.destroy();
  res.redirect('/');
})


router.post('/', async (req, res, next) => {
  try {

    var usuario = req.body.usuario;
    var password = req.body.password;
    var data = await consultas.getUser(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.render('index', {
        layout: 'layout2',
        usuario: req.session.nombre
      })
    } else {
      res.render('index', {
        layout: 'layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
