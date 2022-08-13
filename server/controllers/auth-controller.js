/* eslint-disable require-jsdoc */
const AuthService = require('../services/AuthService');

const SUCCESS_MESSAGE = 'Success';

class AuthController {
  async registration(req, res, next) {
    try {
      const {username, password} = req.body;
      await AuthService.registration(username, password);
      return res.status(200).json({message: SUCCESS_MESSAGE});
    } catch (e) {
      next(e);
    }
  };

  async login(req, res, next) {
    try {
      const {username, password} = req.body;
      const token = await AuthService.login(username, password);
      return res.json({message: SUCCESS_MESSAGE, jwt_token: token});
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AuthController();
