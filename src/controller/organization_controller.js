import { StatusCodes } from "http-status-codes";
import { OrganizationService } from "../services/index.js"

var organizationService = new OrganizationService();


class OrganizationController {

    async registerOrganization(req, res) {
        try {
            const response = await organizationService.registerOrganization(req.body);
            return res.status(StatusCodes.OK).json({
                message: "Organization Profile Created SuccesFully",
                data: response,
                success: true,
                err: {}
            });
        } catch (error) {
            console.log("Error in creating Organization Controller");
            console.log(error);
            return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }

    async getOrganizationProfile(req, res) {
        try {
            const response = await organizationService.getOrganizationProfile(req.body.id);
            return res.status(StatusCodes.OK).json({
                message: "Success",
                data: response,
                success: true,
                err: {}
            });
        } catch (error) {
            console.log("Error in getting Organization Controller");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }


    async updateOrganizationProfile(req, res) {
        try {

            const response = await organizationService.updateOrganizationProfile(req.body.id, req.body.data);
            return res.status(StatusCodes.OK).json({
                message: "Organization profile updated successfully",
                data: response,
                success: true
            });
        } catch (error) {
            console.log("Error in updating Organization Controller");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Error in updating organization profile",
                data: {},
                success: false,
                error: error.message
            });
        }
    }
}

export default OrganizationController;