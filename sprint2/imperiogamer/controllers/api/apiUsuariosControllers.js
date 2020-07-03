const db = require("../../database/models");

let ingresoUsuarioController = {

encontrarUsuario: function (req, res, next) {

 db.usuarios.findAll()
        .then(function(usuarios){
        
          res.json(usuarios)
            
        })
//     let userEmail = req.body.email

//     console.log(userEmail)
//     console.log("entré!")

//     if (userEmail == null || userEmail == undefined || userEmail == "") {
//         res.json(null);
//     } else if (userEmail !== null || userEmail != undefined || userEmail !== "") {
//     db.usuarios.findOne( { where: { email: userEmail },  }).then(function(resultado){
//         res.json(resultado);
//         console.log("acá está el resultado: ", resultado)
//     })
// }
},

}

module.exports = ingresoUsuarioController;