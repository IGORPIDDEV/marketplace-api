const httpStatus = require('http-status');
const User = require('../models').User

exports.get = async (req, res, next) => {
    try {
        let user = await User.findById(req.params.userId)
        res.status(httpStatus.OK);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let users = await User.findAll()
        res.status(httpStatus.OK);
        res.json(users);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        let user = await User.create(req.body)
        res.status(httpStatus.OK);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        let user = await User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        let updatedUser = await User.findByPk(req.params.userId)
        res.status(httpStatus.OK);
        res.json(updatedUser);
    } catch (error) {
        next(error);
    }
};
