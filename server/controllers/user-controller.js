/* eslint-disable require-jsdoc */
const UserService = require('../services/UserService');

const SUCCESS_MESSAGE = 'Success';

class UserController {
  async getProfileInfo(req, res, next) {
    try {
      const userInfo = await UserService.getProfileInfo(req.user);
      res.json({
        user: {
          id: userInfo.id,
          username: userInfo.username,
          createdDate: userInfo.createdDate,
        },
      });
    } catch (e) {
      next(e);
    }
  };

  async deleteProfile(req, res, next) {
    try {
      await UserService.deleteProfile(req.user);
      return res.json({message: SUCCESS_MESSAGE});
    } catch (e) {
      next(e);
    }
  };

  async changeUserPassword(req, res, next) {
    try {
      const {oldPassword, newPassword} = req.body;
      await UserService.changeUserPassword(oldPassword, newPassword, req.user);
      return res.json({message: SUCCESS_MESSAGE});
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
