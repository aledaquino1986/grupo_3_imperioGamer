const fs = require('fs')
const path = require('path');
const multer=require('multer')
const productosFilePath=path.join(__dirname,'../data/productos.json')
let products = JSON.parse(fs.readFileSync(productosFilePath,{ encoding: 'utf-8' }))

let productAddController = {

    /* Renderea página de carga de productos del admin */

    mostrarCargaProd: function(req, res, next) {
        res.render('productAdd',{
            products: products
        });

   },

   cargaProducto:function(req, res, next){
    
        let nuevoProducto = {}
        if( products == "" ){
			nuevoProducto.id = 1
		}else{
			let ultimoProducto =  products[products.length-1]
            nuevoProducto.id= ultimoProducto.id + 1
           console.log(ultimoProducto)
		};
        
        
        nuevoProducto.name = req.body.name,
        nuevoProducto.discount = req.body.discount,
        nuevoProducto.description = req.body.description,
        nuevoProducto.codigo = req.body.codigo,
        nuevoProducto.category = req.body.category,
        nuevoProducto.price = req.body.price,
        nuevoProducto.garantia = req.body.garantia,
        nuevoProducto.color = req.body.color,
        nuevoProducto.proveedor = req.body.proveedor,
        nuevoProducto.image = req.files[0].filename
        console.log(nuevoProducto)
        products.push(nuevoProducto)
        let productoSubirJSON = JSON.stringify(products)
		fs.writeFileSync(productosFilePath,productoSubirJSON)
        res.redirect('productos')
        
    },

    formEdit:function(req, res, next){
         //traigo el producto que me viene por la url
        let producto =  products.find(function(element){
            return  element.id == req.params.id
            
        })
        console.log(producto)
        res.render('productEdit', {
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
        res.redirect('/productos/'+req.params.id)
        
       
    }
}

module.exports = productAddController;