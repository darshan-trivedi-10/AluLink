import { StatusCodes } from "http-status-codes";
import {OrganizationService} from "../services/index.js"

var organizationService = new OrganizationService();


class OrganizationController {
    
    async registerOrganization(req,res){
        try {
            const response = await organizationService.registerOrganization(req.body);
            return res.status(StatusCodes.OK).json({
                message : "Organization Profile Created SuccesFully",
                data : response,
                success : true,
                err : {}
            });
        } catch (error) {
            console.log("Error in creating Organization Controller");
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
                data: {},
                success: false,
                err: error
            });
        }
    }

    async getOrganizationProfile(req,res){

    }

    async updateOrganizationProfile(req,res){

    }

}

export default OrganizationController;