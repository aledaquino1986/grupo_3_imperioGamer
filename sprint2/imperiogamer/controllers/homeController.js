const fs = require('fs')
const path = require('path');
const productosFilePath=path.join(__dirname,'../data/productos.json')
let products = JSON.parse(fs.readFileSync(productosFilePath,{ encoding: 'utf-8' }))

let homeController = {

    /* Renderea el home. */

    mostrarHome: function(req, res, next) {
        res.render('index',{
          title: "Imperio Gamer"
        });

   }

}


module.exports = homeController