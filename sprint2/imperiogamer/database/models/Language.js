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

    Lenguage.associate = function(models){

        Lenguage.hasMany(models.products,{
        as:"products",
        foreignKey: "language_id"
        })

    }
    return Lenguage
}
    
