const fs = require('fs')
const path = require('path');
let db = require('../database/models');
const { title } = require('process');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productDetailController = {
    /*renderea la lista de productos del lado del ADMINiSTRADOR*/
    
    listadoDeProductos: function(req, res, next){

        db.products.findAll({where: {category_id: "1"}})
        .then(function(juegos){
            console.log("juegos ok")
            db.products.findAll({where: {category_id: "2"}})
            .then(function(consolas){
                console.log("consolas ok")
                db.products.findAll({where: {category_id: "3"}})
                .then(function(pcGamer){
                    console.log("pcGamer ok")
                    db.products.findAll({where: {category_id: "4"}})
                    .then(function(sillas){
                        console.log("sillas ok")
                        db.products.findAll({where: {category_id: "5"}})
                        .then(function(accesorios){
                            console.log("accesorios ok")
                            return res.render('products', {
                                juegos: juegos,
                                consolas: consolas,
                                pcGamer: pcGamer,
                                sillas: sillas,
                                accesorios: accesorios,
                                title: "Listado Productos",
                                user: req.session.login,
                                aMiles : toThousand
                            })
                        })
                    })
                })
            })
        })
        
    },

    mostrarDetalleProducto: function(req, res, next){

        db.products.findByPk(req.params.id,{include:
             [{association: "carritos"}, {association: "platforms"}, {association: "languages"}, {association: "categories"}]})
             .then(function(product){
                res.render("productDetailAdmin", {
                    title: product.product_name,
                    producto: product,
                    user: req.session.login,
                    aMiles : toThousand
                });
             })

    },

    delete: (req, res, next) => {

        db.products.destroy({
            where : {
                id: req.params.id
            }
        });

        res.redirect("/products")
    
    },

    mostrarCargaProd: function(req, res, next) {
        db.products.findByPk(req.params.id)
        .then(function(product){
            res.render('product-create',{
                products: product,
                user: req.session.login,
                title: "Cargar Producto"
            });
        })
   },

   cargaProducto:function(req, res, next){
    

    
        db.products.create({
            product_name: req.body.name,
            price: req.body.price,
            prod_description: req.body.description,
            discount: req.body.discount,
            platform_id: req.body.plataforma,
            language_id: req.body.idioma,
            category_id: req.body.category,
            section: req.body.section,
            image: req.files[0].filename
        })
        res.redirect('/')

        

    },



    formEdit:function(req, res, next){

        db.products.findByPk(req.params.id).then(function(producto) {
            res.render('product-Edit', {
                products: producto,
                user: req.session.login,
                title: "Panel Edit"
            });
        })
        
        
    },

    edit: function(req, res, next){
        
        db.products.findByPk(req.params.id).then(function(producto) {
           
   
      let prodImage;
    if(req.file == undefined) {
        prodImage = producto.image
    } else {
        prodImage = req.files[0].filename
       
    }
    console.log("entré")
    console.log(req.files[0].filename)

      db.products.update({


        product_name: req.body.name,
            price: req.body.price,
            prod_description: req.body.description,
            discount: req.body.discount,
            platform_id: req.body.plataforma,
            language_id: req.body.idioma,
            category_id: req.body.category,
            section: req.body.section,
            image: req.files[0].filename
      }, 

      {
          
        where: {
            id: req.params.id
        }


      });

        res.redirect('/products/'+req.params.id)
        
    }) 
            
        
    
    
    }

}
    
    module.exports = productDetailController