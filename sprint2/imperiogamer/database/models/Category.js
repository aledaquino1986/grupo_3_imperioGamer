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
=======
    Category.associate = function(modelos) {
        Category.hasMany(modelos.products, {
            as: "products",
            foreignKey: "category_id"
>>>>>>> e28f25c2e928ce93cc052a8a400e56b5c5f9031d
        })

    }
    return Category
}

