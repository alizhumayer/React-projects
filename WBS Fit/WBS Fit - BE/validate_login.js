const Joi = require('@hapi/joi');

//LOGIN VALIDATION

const schemaLogin = Joi.object().keys({
    
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})

module.exports = schemaLogin;