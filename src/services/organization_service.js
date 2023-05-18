import { OrganizationRepository } from "../repository/index.js";

var organizationRepository = new OrganizationRepository();


class OrganizationService {

    async registerOrganization(data) {
        try {
            const isAvailable = await organizationRepository.findOne({
                "website": data.website
            });
            if (isAvailable) {
                const error = new Error("Organization with the same website already exists.");
                error.statusCode = 409; // Set the HTTP status code
                throw error;
            }
            const response = await organizationRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong while creating Organization Profile in Service Layer");
            throw error;
        }
    }


    async getOrganizationProfile() {

    }

    async updateOrganizationProfile() {

    }
}

export default OrganizationService;