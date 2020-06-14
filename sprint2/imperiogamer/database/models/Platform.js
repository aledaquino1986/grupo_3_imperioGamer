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
    return Platform
}
    
