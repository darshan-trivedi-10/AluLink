import express from 'express';


const router = express.Router();
import Validator from '../../middleware/validator.js';
import { OrganizationController } from '../../controller/index.js';

var organizationController = new OrganizationController();
var validator = new Validator();


// Auth - user , organization

router.post('/organizations', validator.OrganizationVerification, organizationController.registerOrganization);
router.get('/organizations/:id', organizationController.getOrganizationProfile);
router.put('/organizations/update', validator.OrganizationUpdateVerification, organizationController.updateOrganizationProfile);

export default router;