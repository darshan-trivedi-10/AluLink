import { StatusCodes } from "http-status-codes";
import { PostService } from "../services/index.js";

const postService = new PostService();

class PostController {
    async createPost(req, res) {
        try {
            const response = await postService.createPost(req.body);
            return res.status(StatusCodes.OK).json({
                message: "Post Created SuccesFully",
                data: response,
                success: true,
                err: {}
            })

        } catch (error) {
            console.log("Error in creating Post in Controller");
            console.log(error);
            return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }
};

export default PostController;
