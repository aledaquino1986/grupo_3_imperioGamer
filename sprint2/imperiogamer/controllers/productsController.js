const fs = require('fs')
const path = require('path');
const productosFilePath=path.join(__dirname,'../data/productos.json')
let db = require('../database/models');
const { title } = require('process');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let products = JSON.parse(fs.readFileSync(productosFilePath,{ encoding: 'utf-8' }))

let productDetailController = {
    /*renderea la lista de productos del lado del ADMINiSTRADOR*/
    
    listadoDeProductos: function(req, res, next){
        /*res.render('products', {
            productos: products,
            title: "Listado Productos"
        });*/

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
    /*if(req.params.id != undefined){
     let producto = products.find(function(element) {
         return element.id == req.params.id
     });
     let title = producto.name;
     res.render("productDetailAdmin", {
         title: title,
         producto: producto,

     });

    }*/

    },

    delete: (req, res, next) => {

        db.products.destroy({
            where : {
                id: req.params.id
            }
        });

        res.redirect("/products")

        /*let productsQueQuedan = products.filter(function(element) {
            return element.id != req.params.id
        });
    
        let productosModificadosJson = JSON.stringify(productsQueQuedan);
        fs.writeFileSync('../imperiogamer/data/productos.json', productosModificadosJson)
    
        res.redirect("/products"); */
    

    },

    mostrarCargaProd: function(req, res, next) {
        res.render('product-create',{
            products: products,
            user: req.session.login,
            title: "Cargar Producto"
        });

   },

   cargaProducto:function(req, res, next){
    
       /* let nuevoProducto = {}
        if( products == "" ){
			nuevoProducto.id = 1
		}else{
			let ultimoProducto =  products[products.length-1]
            nuevoProducto.id= ultimoProducto.id + 1
		};
        
        nuevoProducto.name = req.body.name,
        nuevoProducto.discount = req.body.discount,
        nuevoProducto.description = req.body.description,
        nuevoProducto.codigo = req.body.codigo,
        nuevoProducto.category = req.body.category,
        nuevoProducto.price = req.body.price,
        nuevoProducto.garantia = req.body.garantia,
        nuevoProducto.color = req.body.color,
        nuevoProducto.plataforma = req.body.plataforma,
        nuevoProducto.image = req.files[0].filename
        products.push(nuevoProducto)
        let productoSubirJSON = JSON.stringify(products)
		fs.writeFileSync(productosFilePath,productoSubirJSON)
        res.redirect('products')
        */
       
        
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
         //traigo el producto que me viene por la url
        /*let producto =  products.find(function(element){
            return  element.id == req.params.id
            
        })*/

        db.products.findByPk(req.params.id).then(function(producto) {
            res.render('product-Edit', {
                products: producto,
                user: req.session.login,
                title: "Panel Edit"
            });
        })
        
        
    },

    edit: function(req, res, next){
        
      db.products.update({
          
        product_name: req.body.titulo,
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


       /*products.forEach(element => {
            if(element.id == req.params.id){
                element.name = req.body.name,
                element.discount = req.body.discount,
                element.description = req.body.description,
                element.codigo = req.body.codigo,
                element.category = req.body.category,
                element.price = req.body.price,
                element.garantia = req.body.garantia,
                element.color = req.body.color,
                element.proveedor = req.body.proveedor,
                element.image = req.files[0].filename
                return productoUp = element
            }
        }); */
       
        /*let productoModificadoJSON= JSON.stringify(products)
        fs.writeFileSync(productosFilePath, productoModificadoJSON)*/
        res.redirect('/products/'+req.params.id)
        
       
    }

}
    
    module.exports = productDetailController