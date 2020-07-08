var db = require("../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productCartControllers = {
        

    /* Lleva a la vista de los productos del usuario. Se accede por /carrito/tus-productos/ */
          verProductosUsuario: function(req, res, next) {
            let user = req.session.login;
            let user_id = new String(user.id)
    
            db.carritos.findAll({
              where: {usuario_id: user_id},
              include: [{association: "products"}]
            })
            .then(function(respuesta){
              res.render('carrito-productos',{
                title: "Tus productos",
                user: user,
                carrito: respuesta[0],
                aMiles: toThousand
              })
            })
          },
          eliminarProd: function(req, res){
            let prod = req.params.prod;
            let cart = req.params.cart;
            db.carritoProductos.destroy({
              where: {product_id: prod, carrito_id: cart}
            }).then(function(){
              res.redirect('/carrito/tus-productos');
            })

            
          },

          eliminarCarrito: function(req, res){
            let eliminar = req.params.id;
            let user = req.session.login;
            let user_id = new String(user.id)
            db.carritoProductos.destroy({where: {carrito_id: eliminar}})
            .then(db.carritos.destroy({where:{usuario_id: user_id}}))
            .then(db.carritos.create({usuario_id: user_id}))
            .then(res.redirect("/"));
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