module.exports =(sequelize,dataType) => {
    const Product = sequelize.define("products",{

        product_name:{
            type: dataType.STRING
        },

        price:{
            type: dataType.INTEGER
        },

        prod_description:{
            type: dataType.STRING
        },

        discount:{
            type: dataType.INTEGER
        },

        platform_id:{
            type: dataType.INTEGER
        },

        language_id:{
            type: dataType.INTEGER
        },
        
        category_id:{
            type: dataType.INTEGER
        },

        createdAt:{
            type: dataType.DATE
        },

        updatedAt:{
            type: dataType.DATE
        },

        image:{
            type: dataType.STRING
        },

        
    },
    )

<<<<<<< HEAD
    Product.associate = function(models){
        Product.belongsToMany(models.carritos,{
            as:"carritos",
            through: "carrito_producto",
            foreignKey: "product_id",
            otherKey: "carrito_id",
            timestamps: false
        })

        Product.belongsTo(models.platforms,{
            as:"platforms",
            foreignKey: "platform_id"
        })

        Product.belongsTo(models.languages,{
            as:"languages",
            foreignKey: "language_id"
        })

        
        Product.belongsTo(models.categories,{
            as:"categories",
            foreignKey: "category_id"
        })
=======
    Product.associate = function(modelos) {
        Product.belongsTo(modelos.platforms, {
            as: "platforms",
            foreignKey: "platform_id"
        });
        
        Product.belongsTo(modelos.languages, {
            as: "languages",
            foreignKey: "language_id"
        });

        Product.belongsTo(modelos.categories, {
            as: "categories",
            foreignKey: "category_id"
        });

>>>>>>> e2d50b0130dbf8c5e100e205ebf4006363374fc2
    }
    return Product
}