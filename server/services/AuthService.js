/* eslint-disable require-jsdoc */
const User = require('../models/user-model');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateAccessToken = (id, username, createdDate) => {
  const payload = {
    id, username, createdDate,
  };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '24h'});
};

class AuthService {
  async registration(username, password) {
    if (!username.trim().length || !password.trim().length) {
      throw ApiError.badRequest('Please enter username or passsword field');
    }
    const candidate = await User.findOne({username});
    if (candidate) {
      throw ApiError.badRequest('User has been already exists');
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    await User.create({username, password: hashPassword});
  };

  async login(username, password) {
    const user = await User.findOne({username});
    if (!user) {
      throw ApiError.badRequest('Cannot find user with this username');
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.badRequest('Incorrect password');
    }
    const token = generateAccessToken(user.id, user.username, user.createdDate);
    return token;
  };
}

module.exports = new AuthService();
