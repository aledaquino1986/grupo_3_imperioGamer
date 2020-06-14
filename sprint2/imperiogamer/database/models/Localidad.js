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
    return Localidad
}
    
