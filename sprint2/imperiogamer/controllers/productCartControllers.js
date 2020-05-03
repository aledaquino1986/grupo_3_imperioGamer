let productCartControllers = {
        
    /* Lleva a la vista del carrito vacío. */
        verCarritoVacio: function(req, res, next) {
            res.render('productCart');
          },

    /* Lleva a la vista de los productos del usuario. Se accede por /carrito/tus-productos/ */
          verProductosUsuario: function(req, res, next) {
            res.render('carrito-productos');
          },
    /* Lleva a la vista donde el usuario agrega sus datos del usuario. Se accede por /carrito/tus-productos/datos-usuario/ */
          agregarDatosUsuario: function(req, res, next) {
            res.render('carrito-datos-usuario');
          },
/* Lleva a la vista de los productos del usuario. Se accede por /carrito/tus-productos/datos-usuario/confirmar-datos */
            confirmarDatos: function(req, res, next) {
            res.render('carrito-confirmar-datos');
          },
/* Lleva a la vista de los productos del usuario. */
            agradecerUsuario: function(req, res, next) {
            res.render('carrito-gracias');
          }

}


module.exports = productCartControllers