let listadoProdsController = {

    /* Renderea página de listado de productos del admin */

    mostrarListadoProds: function(req, res, next) {
        res.render('listado-productos');

   }

}

module.exports = listadoProdsController;