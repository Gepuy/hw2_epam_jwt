const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({message: 'User should authorize'});
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({message: 'User should authorize'});
  }
};
