let productCartControllers = {
        
    /* Lleva a la vista del carrito vacío. */
        verCarritoVacio: function(req, res, next) {
            res.render('productCart', {
              title: "Aquí verás tus productos"
          });

          },

    /* Lleva a la vista de los productos del usuario. Se accede por /carrito/tus-productos/ */
          verProductosUsuario: function(req, res, next) {
            res.render('carrito-productos', {
              title: "Estos son tus productos"
          });
          },
    /* Lleva a la vista donde el usuario agrega sus datos del usuario. Se accede por /carrito/tus-productos/datos-usuario/ */
          agregarDatosUsuario: function(req, res, next) {
            res.render('carrito-datos-usuario', {
              title: "Agregá tus datos"
          });
          },
/* Lleva a la vista de los productos del usuario. Se accede por /carrito/tus-productos/datos-usuario/confirmar-datos */
            confirmarDatos: function(req, res, next) {
            res.render('carrito-confirmar-datos', {
              title: "Confirmá tus datos"
          });
          },
/* Lleva a la vista de los productos del usuario. */
            agradecerUsuario: function(req, res, next) {
            res.render('carrito-gracias', {
              title: "Gracias por tu compra"
          });
          }

}


module.exports = productCartControllers