var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/', async function (req, res, next) {
  

  var sort = await consultas.getSort();

  if (req.session.id_usuario) {
    
    res.render('sorteos', {
      layout: 'layout2',
      usuario: req.session.nombre,
      sort
    });
  } else {
    res.render('sorteos', {
      layout: 'layout',
      sort
    });

  }

});



module.exports = router;
