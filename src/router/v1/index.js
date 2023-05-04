import express from 'express';

const router = express.Router();


// Auth - user , organization

router.post('/organizations', registerOrganization);
router.get('/organizations/:id', getOrganizationProfile);
router.put('/organizations/:id', updateOrganizationProfile);


