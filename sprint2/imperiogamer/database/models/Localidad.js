module.exports =(sequelize,dataType) => {
    const Localidad = sequelize.define("localidades",{

        localidad:{
            type: dataType.STRING
        },

        id_provincia:{
            type: dataType.STRING
        }
        
    },{
        tableName: "localidades",
        timestamps: false
    }
    )
    Localidad.associate = function(models){
        Locadidad.hasMany(models.Provincia,{
            as:'provincias',
            foreignKey: 'id_provincia'
        })
    }
    return Localidad
}
    
