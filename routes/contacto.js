var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/', async function (req, res, next) {
  
  if (req.session.id_usuario) {
    
    res.render('contacto', {
      layout: 'layout2',
      usuario: req.session.nombre,
    });
  } else {
    res.render('contacto', {
      layout: 'layout'
    });

  }

});



module.exports = router;
