let ingresoUsuarioController = {

    /* Renderea página de login. */

    mostrarPaginaLogin: function(req, res, next) {
        res.render('ingreso-usuario', {
            title: "Ingresá a tu cuenta"
        });

   },

   postLogin: function(req, res, next) {
    res.redirect("/");
  
}

}



module.exports = ingresoUsuarioController