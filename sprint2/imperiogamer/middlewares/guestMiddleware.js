const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
var {check, validationResult, body} = require('express-validator');

function guesMiddleware(req,res,next){
    if(req.session.login === undefined){
        next();
    } else {
        res.redirect('/')
    }
 
}

module.exports = guesMiddleware;