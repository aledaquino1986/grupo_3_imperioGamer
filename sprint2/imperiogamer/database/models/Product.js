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
    return Product
}