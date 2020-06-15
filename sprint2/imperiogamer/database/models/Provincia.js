module.exports =(sequelize,dataType) => {
    const Provincia = sequelize.define("provincias",{

        provincia_nombre:{
            type: dataType.STRING
        }
        
    },{
        timestamps: false
    }
    )

    Provincia.associate = function(models){
        Provincia.hasMany(models.usuarios,{
            as:"usuarios",
            foreignKey: "provincia_id"
        })
    }
    return Provincia
}
    
