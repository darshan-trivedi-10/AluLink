import express from 'express';


const router = express.Router();
import Validator from '../../middleware/validator.js';
import { OrganizationController, UserController, PostController } from '../../controller/index.js';

var organizationController = new OrganizationController();
var userController = new UserController();
var postControllet = new PostController();

var validator = new Validator();

/* Auth */

// organization

router.get('/organizations/search', organizationController.getOrganizationList);

router.post('/organizations', validator.OrganizationVerification, organizationController.registerOrganization);
router.get('/organizations/:id', organizationController.getOrganizationProfile);
router.put('/organizations/update', validator.OrganizationUpdateVerification, organizationController.updateOrganizationProfile);


// User 
router.post('/user', validator.UserVerification, userController.registerUser);
router.get('/user/:id', userController.getUser);
router.put('/user/update', validator.UserUpdateVerification, userController.updateUser);


// Post 
router.post('/post/create', postControllet.createPost);

export default router;