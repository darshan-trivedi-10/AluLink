import { OrganizationRepository } from "../repository/index.js";
import { generateToken } from '../utills/token.js'
var organizationRepository = new OrganizationRepository();

class OrganizationService {

    async registerOrganization(data) {
        try {
            const isAvailable = await organizationRepository.get({
                "website": data.website
            });
            if (isAvailable) {
                const error = new Error("Organization with the same website already exists.");
                error.statusCode = 409; // Set the HTTP status code
                throw error;
            }
            const response = await organizationRepository.create(data);
            const token = generateToken(response._id);

            return {
                user: response,
                token: token
            };
        } catch (error) {
            console.log("Something went wrong while creating Organization Profile in Service Layer");
            throw error;
        }
    }


    async getOrganizationProfile(id) {
        try {
            const organizationData = await organizationRepository.get(id);
            return organizationData;
        } catch (error) {
            console.log("Something went wrong while getting Organization Profile in Service Layer");
            throw error;
        }
    }

    async updateOrganizationProfile(id, data) {
        try {
            const organizationData = await organizationRepository.update(id, data);
            return organizationData;
        } catch (error) {
            console.log("Something went wrong while updating Organization Profile in Service Layer");
            throw error;
        }
    }
}

export default OrganizationService;