const Joi = require('@hapi/joi');

//REGISTER VALIDATION

const schemaReg = Joi.object().keys({
    first_name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})

module.exports = schemaReg;