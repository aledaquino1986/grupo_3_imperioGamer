const fs = require('fs')
const path = require('path');
const productosFilePath=path.join(__dirname,'../data/productos.json')
let db = require('../database/models')
let products = JSON.parse(fs.readFileSync(productosFilePath,{ encoding: 'utf-8' }))

let productDetailController = {
    /*renderea la lista de productos del lado del ADMINiSTRADOR*/
    listadoDeProductos: function(req, res, next){
        res.render('products', {
            productos: products,
            title: "Listado Productos"
        });
        
    },

    mostrarDetalleProducto: function(req, res, next){
    if(req.params.id != undefined){
     let producto = products.find(function(element) {
         return element.id == req.params.id
     });
     let title = producto.name;
     res.render("productDetailAdmin", {
         title: title,
         producto: producto,

     });

    }
    },

    delete: (req, res, next) => {
        let productsQueQuedan = products.filter(function(element) {
            return element.id != req.params.id
        });
    
        let productosModificadosJson = JSON.stringify(productsQueQuedan);
        fs.writeFileSync('../imperiogamer/data/productos.json', productosModificadosJson)
    
        res.redirect("/products");
    

    },

    mostrarCargaProd: function(req, res, next) {
        res.render('product-create',{
            products: products
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
            platform_id: 1,
            language_id: 10,
            category_id: 20,
            image: req.files[0].filename

        })
        res.redirect('/')

        

    },



    formEdit:function(req, res, next){
         //traigo el producto que me viene por la url
        let producto =  products.find(function(element){
            return  element.id == req.params.id
            
        })
        res.render('product-Edit', {
            products: producto
        });
        
    },

    edit: function(req, res, next){
        let productoUp=[]
        products.forEach(element => {
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
        });
       
        let productoModificadoJSON= JSON.stringify(products)
        fs.writeFileSync(productosFilePath, productoModificadoJSON)
        res.redirect('/products/'+req.params.id)
        
       
    }

}
    
    module.exports = productDetailController