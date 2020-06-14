module.exports =(sequelize,dataType) => {
    const Carrito = sequelize.define("carritos",{

        usuario_id:{
            type: dataType.INTEGER
        },

        estado:{
            type: dataType.STRING
        },

        total:{
            type: dataType.INTEGER
        }
    },
    {
        timestamps: false
    }
    )
    return Carrito
}