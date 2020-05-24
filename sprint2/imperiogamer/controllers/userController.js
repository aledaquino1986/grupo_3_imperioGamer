const fs = require('fs')
const path = require('path');
const usuariosFilePath=path.join(__dirname,'../data/usuarios.json')
let users = JSON.parse(fs.readFileSync(usuariosFilePath,{ encoding: 'utf-8' }))
const productosFilePath=path.join(__dirname,'../data/productos.json')
let productos = JSON.parse(fs.readFileSync(productosFilePath,{ encoding: 'utf-8' }))
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let homeController = {

    mostrarDetalleProducto: function(req, res, next) {
      let producto = productos.find(function(element) {
        return element.id == req.params.id
    });
      res.render('productDetail', {
        title: producto.name,
        producto: producto,
        aMiles: toThousand
    });
    
    },
    listarProductos: function(req, res, next){
      res.render('productsUsers',{
        title: "Imperio Gamer",
        productos: productos
    })
    },

    mostrarPerfil: function(req, res, next) {
      let usuario =  users.find(function(element){
        return  element.id == req.params.id
        
    })
        res.render('profile',{
          title: "Imperio Gamer",
          usuario: usuario,
          mgs:""
        });

   },

   editPerfil:function(req, res, next) {
    let usuarioUp=[]
      users.forEach(element => {
          if(element.id == req.params.id){
              element.name = req.body.nombre,
              element.apellido = req.body.apellido,
              element.dni = req.body.dni,
              element.direccion = req.body.direccion,
              element.telefono = req.body.telefono
              return usuarioUp = element
        }
    });
    console.log(req.body.email)
   console.log(usuarioUp)
    let userModificadoJSON= JSON.stringify(users)
    fs.writeFileSync(usuariosFilePath, userModificadoJSON)
    res.redirect('/user/profile/'+req.params.id)
    
   }

}


module.exports = homeController