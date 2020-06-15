module.exports =(sequelize,dataType) => {
    const Localidad = sequelize.define("localidades",{

        localidad:{
            type: dataType.STRING
        }
        
    },{
        tableName: "localidades",
        timestamps: false
    }
    )

    Localidad.associate = function(models){
        Localidad.hasMany(models.usuarios,{
            as:"usuarios",
            foreignKey: "localidad_id"
        })
    }
    return Localidad
}
    
