var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index');
var sorteosRouter = require('./routes/sorteos');
var nosotrosRouter = require('./routes/nosotros');
var contactoRouter = require('./routes/contacto');
var usersRouter = require('./routes/users');
var verRouter = require('./routes/ver');
var verlistaRouter = require('./routes/verlista');
var vercuadrosRouter = require('./routes/vercuadros');
var editarRouter = require('./routes/editar');
var borrarRouter = require('./routes/borrar');
var agregarRouter = require('./routes/agregar');
var deleteRouter = require('./routes/delete');
var registerRouter = require('./routes/register');
var versorteosRouter = require('./routes/versorteos');
var mensajesRouter = require('./routes/mensajes');
var enviarmensajeRouter = require('./routes/enviarmensaje');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'algunacosa',
  resave: false,
  saveUninitialized: true
}));




app.use('/',  indexRouter);
app.use('/sorteos', sorteosRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/contacto',  contactoRouter);
app.use('/users',usersRouter);
app.use('/ver',verRouter);
app.use('/verlista',verlistaRouter);
app.use('/vercuadros',vercuadrosRouter);
app.use('/editar',editarRouter);
app.use('/borrar',borrarRouter);
app.use('/agregar',agregarRouter);
app.use('/delete',deleteRouter);
app.use('/register',registerRouter);
app.use('/versorteos',versorteosRouter);
app.use('/mensajes',mensajesRouter);
app.use('/enviarmensaje',enviarmensajeRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
