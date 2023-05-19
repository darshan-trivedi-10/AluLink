import user from '../model/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository{
    constructor(){
        super(user);
    }
}

export default UserRepository;