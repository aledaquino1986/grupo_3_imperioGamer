module.exports =(sequelize,dataType) => {
    const Localidad = sequelize.define("localidades",{

        localidad:{
            type: dataType.STRING
        },

       id_provincia:{
           type: dataType.INTEGER
       }
    }
    )
    return Localidad
}
    
