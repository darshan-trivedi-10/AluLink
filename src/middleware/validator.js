import { StatusCodes } from 'http-status-codes'
import Joi from 'joi';

class Validator {

    // Organization Validation

    /*
    * @use : Organization Validation while creating organization
    * @author : Trivedi Darshan 
    */
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

            const { error } = organizationSchema.validate(req.body);
            if (error) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: error.message,
                    success: false,
                    error: "Client Error",
                    data: []
                });
            }

            // const organizationData = await organizationSchema.validateAsync(
            //     req.body
            // );
            next();
        } catch (error) {
            console.log("Error in the Validation :(");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                success: false,
                error: "Server Error",
                data: []
            });
        }

    }

    /*
    * @use : Organization Validation while updating organization details
    * @author : Trivedi Darshan
    */
    async OrganizationUpdateVerification(req, res, next) {
        try {
            const allowedProperties = ['name', 'location', 'established', 'website', 'phoneNumber', 'email', 'logo', 'description', 'programType', 'admin'];
            const allowedAdminProperties = ['name', 'email', 'phone'];
            const updates = {};

            // Check if the request body contains any property not in the allowedProperties list
            for (const key in req.body.data) {
                if (allowedProperties.includes(key)) {
                    if (key === 'admin') {
                        // Handle modifications to the admin object properties
                        const adminUpdates = {};
                        for (const adminKey in req.body.data.admin) {
                            if (allowedAdminProperties.includes(adminKey)) {
                                adminUpdates[adminKey] = req.body.data.admin[adminKey];
                            } else {
                                return res.status(StatusCodes.BAD_REQUEST).json({
                                    message: `Updating the '${adminKey}' property in the 'admin' object is not allowed`,
                                    success: false,
                                    error: "Client Error",
                                    data: []
                                });
                            }
                        }
                    }
                } else {
                    return res.status(StatusCodes.BAD_REQUEST).json({
                        message: `Updating the '${key}' property is not allowed`,
                        success: false
                    });
                }
            }

            if (!req.body.id) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: "Organization ID is required for update",
                    success: false,
                    error: "Client Error",
                    data: []
                });
            }

            next();

        } catch (error) {
            console.log("Error in the Organization Update Validation :(");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                success: false,
                error: "Server Error",
                data: []
            });
        }
    }

    // User Validation

    /*
    * @use : Validation of user while creating user
    * @author : Trivedi Darshan
    */

    async UserVerification(req, res, next) {
        try {
            const userSchema = Joi.object({
                name: Joi.string().required(),
                email: Joi.string().email().required(),
                password: Joi.string().required().min(5),
                dataOfBirth: Joi.date().optional(),
                headline: Joi.string().required(),
                phoneNumber: Joi.string().optional(),
                colleges: Joi.object({
                    college: Joi.string().required(),
                    startYear: Joi.number().required(),
                    graduationYear: Joi.number().required(),
                }).required()
            });

            const userData = await userSchema.validateAsync(
                req.body
            );

            next();
        } catch (error) {
            console.log("Error in the User Registor Validation :(");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                success: false,
                error: "Server Error",
                data: []
            });
        }
    }


    /*
    * @use : User Validation while updating organization details
    * @author : Trivedi Darshan
    */

    async UserUpdateVerification(req, res, next) {
        try {
            const allowedProperties = ['name', 'email', 'dateOfBirth', 'headline', 'email', 'phoneNumber', 'colleges'];
            for (const key in req.body.data) {
                if (!allowedProperties.includes(key)) {
                    return res.status(StatusCodes.BAD_REQUEST).json({
                        message: `Updating the ${key} property is not allowed`,
                        success: false,
                        error: "Client Error",
                        data: []
                    });
                }
            }

            if (!req.body.id) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: "User ID is required for update",
                    success: false,
                    error: "Client Error",
                    data: []
                });
            }

            next();
        } catch (error) {
            console.log("Error in the User Update Validation :(");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                success: false,
                error: "Server Error",
                data: []
            });
        }
    }

}

export default Validator;