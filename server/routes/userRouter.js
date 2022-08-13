/* eslint-disable linebreak-style */
const Router = require('express');
const router = new Router();
const userController = require('../controllers/user-controller');

router.get('/me', userController.getProfileInfo);
router.delete('/me', userController.deleteProfile);
router.patch('/me', userController.changeUserPassword);

module.exports = router;
