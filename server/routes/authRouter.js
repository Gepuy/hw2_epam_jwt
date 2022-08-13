const Router = require('express');
const router = new Router();
const AuthController = require('../controllers/auth-controller');

router.post('/register', AuthController.registration);
router.post('/login', AuthController.login);

module.exports = router;
