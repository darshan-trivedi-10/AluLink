import { StatusCodes } from 'http-status-codes';
import organization from '../model/organization.js';
import { UserRepository, OrganizationRepository } from '../repository/index.js'

var userRepository = new UserRepository();
var organizationRepository = new OrganizationRepository();

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
                    statusCode: 400 // Use the appropriate status code here
                };
                throw customError;
            }

            console.log("Something went wrong while creating user Profile in Service Layer");
            throw error;
        }
    }

    async updateUser(id, data) {
        try {

        } catch (error) {

        }
    }

    async getUser(id) {
        try {

        } catch (error) {

        }
    }

}

export default UserService;


