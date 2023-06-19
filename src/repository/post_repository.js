import post from '../model/posts.js';
import CrudRepository from "./crud-repository.js";


class PostRepository extends CrudRepository {
    constructor() {
        super(post);
    }
}

export default PostRepository;