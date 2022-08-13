/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable semi */
const ApiError = require('../error/ApiError');

module.exports = function(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message});
    }
    return res.status(500).json({message: 'Internal error'})
};
