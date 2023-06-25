import { StatusCodes } from "http-status-codes";
import { PostRepository, UserRepository } from "../repository/index.js";
import post from "../model/posts.js";

var postRepository = new PostRepository();
var userRepository = new UserRepository();

class PostService {
    async createPost(data) {
        try {

            const isVerified = await userRepository.get({
                "_id": data.owner,
                "isVerified": true
            })

            if (!isVerified || !(isVerified.colleges[0].college !== data.organization)) {
                const error = new Error("You're not a Verified User");
                error.statusCode = StatusCodes.UNAUTHORIZED;
                throw error;
            }

            const response = await postRepository.create(data);
            return response;

        } catch (error) {

            if (
                error.message.includes("Cast to ObjectId failed") ||
                error.message.includes("path \"_id\"")
            ) {
                // Custom error response for "Cast to ObjectId" error
                const customError = {
                    message: "Invalid ID format",
                    data: {},
                    success: false,
                    statusCode: StatusCodes.CONFLICT
                };
                throw customError;
            }

            console.log("Something went wrong while creating post in Service Layer");
            throw error;
        }
    }

    async getAllPost(id, page) {
        try {
            const posts = await postRepository.getAllPost(id, page);
            return posts;
        } catch (error) {
            console.log("Something went wrong while fetching all post in Service Layer");
            throw error;
        }

    }


}

export default PostService;