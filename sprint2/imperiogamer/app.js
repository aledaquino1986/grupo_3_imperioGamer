var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var listadoProductosRouter = require('./routes/listado-productos');
var productosRouter = require('./routes/productos');
var carritoRouter = require('./routes/carrito');
var carritoProductoRouter = require('./routes/carrito-producto');
var carritoFinCompraRouter = require('./routes/carrito-fin-compra');
var carritoConfirmaDatosRouter = require('./routes/carrito-confirmar-datos');
var carritoAgradecimientoRouter = require('./routes/carrito-gracias');
var formularioRegistoRouter = require('./routes/formulario-registro');
var cargaProductoRouter = require('./routes/carga-producto');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/listado-productos', listadoProductosRouter);
app.use('/listado-productos', productosRouter);
app.use('/carrito', carritoRouter);
app.use('/registrate', formularioRegistoRouter);
app.use('/carga-producto', cargaProductoRouter);
app.use('/carrito/tus-productos', carritoProductoRouter);
app.use('/carrito/fin-compra', carritoFinCompraRouter);
app.use('/carrito/confirmar-datos', carritoConfirmaDatosRouter);
app.use('/carrito/gracias', carritoAgradecimientoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
