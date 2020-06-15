module.exports =(sequelize,dataType) => {
    const Category = sequelize.define("categories",{

        category_name:{
            type: dataType.STRING
        }
        
    },{
        tableName: "categories",
        timestamps: false
    },
    {
        timestamps: false
    }
    )

<<<<<<< HEAD
    Category.associate = function(models){

        Category.hasMany(models.products,{
        as:"products",
        foreignKey: "category_id"
        })

=======
    Category.associate = function(modelos) {
        Category.hasMany(modelos.products, {
            as: "products",
            foreignKey: "cateogry_id"
        })
>>>>>>> e2d50b0130dbf8c5e100e205ebf4006363374fc2
    }
    return Category
}

