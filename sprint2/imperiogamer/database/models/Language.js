module.exports =(sequelize,dataType) => {
    const Lenguage = sequelize.define("languages",{
        language_name:{
            type: dataType.STRING
        }
    },
    {
        timestamps: false
    }
    )

<<<<<<< HEAD
    Lenguage.associate = function(models){

        Lenguage.hasMany(models.products,{
        as:"products",
        foreignKey: "language_id"
        })

=======
    Lenguage.associate = function(modelos) {
        Lenguage.hasMany(modelos.products, {
            as: "products",
            foreignKey: "language_id"
        })
>>>>>>> e2d50b0130dbf8c5e100e205ebf4006363374fc2
    }
    return Lenguage
}
    
