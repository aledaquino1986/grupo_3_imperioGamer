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
    return Category
}