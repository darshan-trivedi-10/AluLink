import { StatusCodes } from "http-status-codes";
import { UserService } from "../services/index.js";

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

    }

    async updateUser(req, res) {

    }
}

export default UserController;