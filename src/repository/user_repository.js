import user from '../model/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository {
    constructor() {
        super(user);
    }

    async getUnVerifed(data) {
        try {
            const result = await this.model.find(data).select('-password -admin.password -isVerified');
            return result;
        } catch (error) {
            console.log("Something Went Wrong getting unverified user in - user Repository");
            throw error;
        }
    }

    async getAllUser(id, page) {
        const pageSize = 10;
        const skipCount = (page - 1) * pageSize;

        const projection = {
            name: 1,
            headline: 1,
        };

        try {
            const users = await user.find({ 'colleges.college': id, isVerified: true }, projection).skip(skipCount).limit(pageSize);
            return users;
        } catch (error) {
            console.error('Error retrieving users:', error);
            throw error;
        }
    }



}

export default UserRepository;