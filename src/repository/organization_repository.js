import organization from '../model/organization.js';
import CrudRepository from './crud-repository.js';

class OrganizationRepository extends CrudRepository {
    constructor(){
        super(organization);
    }
}

export default OrganizationRepository;