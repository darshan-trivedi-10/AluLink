import organization from '../model/organization.js';
import CrudRepository from './crud-repository.js';

class OrganizationRepository extends CrudRepository {
    constructor() {
        super(organization);
    }

    async getOrganizationList(text) {
        try {

            const query = {
                $or: [
                    { name: { $regex: text, $options: 'i' } },
                    { location: { $regex: text, $options: 'i' } }
                ]
            };

            const organizations = await this.model.find(query).select('name id established').limit(10);

            return organizations;
        } catch (error) {
            throw new Error('Error fetching organization list');
        }
    }


}

export default OrganizationRepository;