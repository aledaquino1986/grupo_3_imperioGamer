module.exports =(sequelize,dataType) => {
    const Lenguage = sequelize.define("lenguages",{
        language_name:{
            type: dataType.STRING
        }
    },
    {
        timestamps: false
    }
    )
    return Lenguage
}
    
