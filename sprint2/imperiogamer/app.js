var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require("method-override");

var homeRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ingresoUsuarioRouter = require('./routes/ingreso-usuario');
var productosUserRouter = require('./routes/productDetailUser'); 
var productosRouter = require('./routes/productDetail'); //acá
var carritoRouter = require('./routes/productCart');
var formularioRegistoRouter = require('./routes/register');
var cargaProductoRouter = require('./routes/productAdd'); //acá 
var listadoProductosAdmin = require('./routes/listado-productos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride("_method"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/ingreso-usuario', ingresoUsuarioRouter);
app.use('/productos', productosRouter);
app.use('/carrito', carritoRouter);
app.use('/registrate', formularioRegistoRouter);
app.use('/carga-producto', cargaProductoRouter);
app.use('/listado-productos', listadoProductosAdmin);
app.use("/detalle-producto", productosUserRouter);

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
