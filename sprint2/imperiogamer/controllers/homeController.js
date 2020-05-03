let homeController = {

    /* Renderea el home. */

    mostrarHome: function(req, res, next) {
        res.render('index');

   }

}


module.exports = homeController