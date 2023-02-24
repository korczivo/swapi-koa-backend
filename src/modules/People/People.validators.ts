import * as Joi from 'joi'

export const createPersonValidator: Joi.SchemaMap = {
    name: Joi.string().max(255).required(),
    mass: Joi.string().max(255).required()
}

export const updatePersonValidator: Joi.SchemaMap = {
    name: Joi.string().max(255).required(),
    mass: Joi.string().max(255).required()
}