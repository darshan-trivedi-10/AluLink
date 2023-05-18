import { StatusCodes } from 'http-status-codes'
import Joi from 'joi';

class Validator {
    async OrganizationVerification(req, res, next) {
        try {
            const organizationSchema = Joi.object({
                name: Joi.string().required(),
                location: Joi.string().required(),
                established: Joi.date().required(),
                website: Joi.string().uri().required(),
                phoneNumber: Joi.string().allow(null, "").optional(),
                email: Joi.string().email().allow(null, "").optional(),
                logo: Joi.string().allow(""),
                description: Joi.string().required(),
                programType: Joi.string().required(),
                admin: Joi.object({
                    name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                    phone: Joi.string().required(),
                }).required(),
            });
            const organizationData = await organizationSchema.validateAsync(
                req.body
            );
            console.log("DBT : ",req.body) 
            next();
        } catch (error) {
            console.log("Error in the Validator :)");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                success: false,
                err: "Server Error",
                data: []
            });
        }

    }

}

export default Validator;