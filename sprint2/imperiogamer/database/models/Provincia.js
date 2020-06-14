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
        Provincia.belongsTo(models.Locadidad,{
            as:'locadidad',
            foreignKey: 'id_provincia'
        })
    }
    
    return Provincia
}
    
