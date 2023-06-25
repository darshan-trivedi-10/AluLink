import post from '../model/posts.js';
import CrudRepository from "./crud-repository.js";


class PostRepository extends CrudRepository {
    constructor() {
        super(post);
    }

    async getAllPost(id, page) {
        const pageSize = 15;
        const skipCount = (page - 1) * pageSize;
        if (skipCount < 0) {
            skipCount = 0;
        }

        try {
            const posts = await post
                .find({ 'organization': id })
                .sort({ createdAt: -1 }) // Sort by the "createdAt" field in descending order
                .skip(skipCount)
                .limit(pageSize);
            return posts;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default PostRepository;