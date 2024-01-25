import Joi from "joi";

export const RegisterSchema = Joi.object({
    username: Joi.string().min(2).max(50).required()
        .messages({
            "string.base": "username must be a string",
            "string.empty": "username is required",
            "string.min": "username must have at least {#limit} letter",
            "string.max": "username cannot be more than {#limit} character",
            "any.required": "username is required"
        }),

    email: Joi.string().email().required()
        .messages({
            "string.base": "email must be string",
            "string.email": "invalid email",
            "any.required": "email is required",
            "string.empty": "email is required",
        }),
    contact: Joi.number().min(1000000000).max(9999999999).required()
        .messages({
            "any.required": "contact is required",
            "number.base": "invalid contact number",
            "number.min": "contact number should be 10 character",
            "number.max": "contact number should be 10 character",
            "number.empty": "contact is required",
        }),
    address: Joi.string().max(100).required()
        .messages({
            "any.required": "address is required",
            "string.base": "invalid address",
            "string.max": "address cannot be more than 100 character",
            "string.empty": "address is required",
        }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
        .messages({
            "string.base": "invalid password",
            "any.required": "password is required",
            "string.pattern.base": "Password must contain only letters and numbers and be between 3 and 30 characters",
            "string.empty": "password is required",
        })
});


export const loginSchema = Joi.object({
    email: Joi.string().email().required()
        .messages({
            "string.base": "email must be string",
            "string.email": "invalid email",
            "any.required": "email is required",
            "string.empty": "email is required"
        }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
        .messages({
            "string.base": "invalid password",
            "any.required": "password is required",
            "string.pattern.base": "Password must contain only letters and numbers and be between 3 and 30 characters",
            "string.empty": "password is required",
        })
});