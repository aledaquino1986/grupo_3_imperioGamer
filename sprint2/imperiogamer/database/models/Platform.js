module.exports =(sequelize,dataType) => {
    const Platform = sequelize.define("platforms",{
        platform_name:{
            type: dataType.STRING
        }
    },
    {
        timestamps: false
    }
    )

<<<<<<< HEAD
    Platform.associate = function(models){

        Platform.hasMany(models.products,{
        as:"products",
        foreignKey: "platform_id"
        })

=======
    Platform.associate = function(modelos) {
        Platform.hasMany(modelos.products, {
            as: "products",
            foreignKey: "platform_id"
        })
>>>>>>> e2d50b0130dbf8c5e100e205ebf4006363374fc2
    }
    return Platform
}

    
