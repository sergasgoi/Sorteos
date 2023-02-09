var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/', async function (req, res, next) {
  
  if (req.session.id_usuario) {
    
    res.render('nosotros', {
      layout: 'layout2',
      usuario: req.session.nombre,
    });
  } else {
    res.render('nosotros', {
      layout: 'layout'
    });

  }

});



module.exports = router;
