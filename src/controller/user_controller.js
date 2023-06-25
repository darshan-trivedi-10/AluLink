import { StatusCodes } from "http-status-codes";
import { UserService } from "../services/index.js";
import user from "../model/user.js";

var userService = new UserService();

class UserController {
    async registerUser(req, res) {
        try {
            const response = await userService.registerUser(req.body);
            return res.status(StatusCodes.OK).json({
                message: "User Profile Created SuccesFully",
                data: response,
                success: true,
                err: {}
            })

        } catch (error) {
            console.log("Error in creating User in Controller");
            console.log(error);
            return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }

    async getUser(req, res) {
        try {
            const response = await userService.getUser({ _id: req.params.id });
            return res.status(StatusCodes.OK).json({
                message: "User Fetch Succesfully",
                data: response,
                success: true,
                error: {}
            });
        } catch (error) {
            console.log("Error in getting User Controller");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                data: {},
                success: false,
                error: error
            });
        }
    }

    async updateUser(req, res) {
        try {
            const response = await userService.updateUser(req.body.id, req.body.data);
            return res.status(StatusCodes.OK).json({
                message: "User Profile Updated Successfully",
                data: response,
                success: true
            });

        } catch (error) {
            console.log("Error in updating User - Controller");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Error in Updating organization Profile",
                data: {},
                success: false,
                error: error.message
            });
        }
    }

    async unverifiedUser(req, res) {
        try {
            const response = await userService.unverifiedUser(req.body.id);
            return res.status(StatusCodes.OK).json({
                message: "Successfully getting un verified user",
                data: response,
                success: true
            });

        } catch (error) {
            console.log("Error in getting un verified User - Controller");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Error in un verified user Profile",
                data: {},
                success: false,
                error: error.message
            });
        }
    }

    async verifyUser(req, res) {
        try {
            const response = await userService.verifyUser(req.body);
            return res.status(StatusCodes.OK).json({
                message: "Successfully changes user status",
                data: response,
                success: true
            });

        } catch (error) {
            console.log("Error while verifying User - Controller");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Error in un verified user Profile",
                data: {},
                success: false,
                error: error.message
            });
        }
    }

    async getAllUser(req, res) {
        try {
            const response = await userService.getAllUser(req.body.id, req.body.page);
            return res.status(StatusCodes.OK).json({
                message: "Successfully fetched user",
                data: response,
                success: true
            });

        } catch (error) {
            console.log("Error while getting all User - Controller");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Error while getting all User",
                data: {},
                success: false,
                error: error.message
            });
        }
    }
}

export default UserController;