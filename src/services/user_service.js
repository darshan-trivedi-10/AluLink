import { StatusCodes } from 'http-status-codes';
import { UserRepository, OrganizationRepository } from '../repository/index.js'
import { generateToken } from '../utills/token.js';

var userRepository = new UserRepository();

class UserService {
    async registerUser(data) {
        try {
            const isRegisterUser = await userRepository.get({
                "email": data.email
            });

            // check for duplicate user 
            if (isRegisterUser) {
                const error = new Error("You're Already Register User");
                error.statusCode = StatusCodes.CONFLICT;
                throw error;
            }

            const response = await userRepository.create(data);
            const token = generateToken(response._id);

            return {
                user: response,
                token: token
            };
            return response;

        } catch (error) {

            if (
                error.message.includes("Cast to ObjectId failed") &&
                error.message.includes("path \"college\"")
            ) {
                // Custom error response for "Cast to ObjectId" error
                const customError = {
                    message: "Invalid college ID format",
                    data: {},
                    success: false,
                    statusCode: StatusCodes.CONFLICT
                };
                throw customError;
            }

            console.log("Something went wrong while creating user Profile in Service Layer");
            throw error;
        }
    }

    async updateUser(id, data) {
        try {
            const userData = await userRepository.update(id, data);
            return userData;
        } catch (error) {
            console.log("Something went wrong while updating user profile - Service Layer");
            throw error;
        }
    }

    async getUser(id) {
        try {
            const userData = await userRepository.get(id);
            return userData;
        } catch (error) {
            console.log("Something went wrong while getting User Profile in Service Layer");
            throw error;
        }
    }

}

export default UserService;


