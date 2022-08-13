/* eslint-disable require-jsdoc */
const User = require('../models/user-model');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcryptjs');

class UserService {
  async getProfileInfo(user) {
    const userInfo = await User.findOne({_id: user.id});
    if (!user) {
      throw ApiError.badRequest('You need to authorize');
    }
    return userInfo;
  }

  async deleteProfile(userInfo) {
    const user = await User.findOne({_id: userInfo.id});
    if (!user) {
      throw ApiError.badRequest('Unauthorized');
    }
    await User.findByIdAndDelete(user.id);
  }

  async changeUserPassword(oldPassword, newPassword, userInfo) {
    const user = await User.findOne({_id: userInfo.id});
    if (!user) {
      throw ApiError.badRequest('Unauthorized');
    }
    const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordCorrect) {
      throw ApiError.badRequest('Password is incorrect');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 7);
    await User.findByIdAndUpdate(user.id, {password: hashedPassword});
  }
}

module.exports = new UserService();
