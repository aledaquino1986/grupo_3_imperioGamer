let productAddController = {

    /* Renderea página de carga de productos del admin */

    mostrarCargaProd: function(req, res, next) {
        res.render('productAdd');

   }

}

module.exports = productAddController;