module.exports =(sequelize,dataType) => {
    const Usuario = sequelize.define("usuarios",{

        first_name:{
            type: dataType.STRING,
            allowNull: false
        },

        last_name:{
            type: dataType.STRING,
            allowNull: false
        },

        dni:{
            type: dataType.INTEGER,
        },

        email:{
            type: dataType.STRING,
            allowNull: false
        },

        direccion:{
            type: dataType.STRING,
        },

        tel:{
            type: dataType.STRING,
        },

        password:{
            type: dataType.STRING,
        },

        avatar:{
            type: dataType.STRING,
        }
        
    },{
        timestamps: false
    }
    )
    Usuario.associate = function(models){
        Locadidad.belongsTo(models.Locadidad,{
            as:'localidad_id',
            foreignKey: 'localidad_id'
        },  
        )
    }

    Usuario.associate = function(models){
        Locadidad.belongsTo(models.Locadidad,{
            as:'localidad_id',
            foreignKey: 'localidad_id'
        },  
        )
    }
    
    return Usuario
}
    
