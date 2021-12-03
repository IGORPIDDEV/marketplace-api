const httpStatus = require('http-status');
const Status = require('../models').Status;

exports.get = async (req, res, next) => {
    try {
        let status = await Status.findById(req.params.statusId)
        res.status(httpStatus.OK);
        res.json(status);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let statuses = await Status.findAll()
        res.status(httpStatus.OK);
        res.json(statuses);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        let status = await Status.create(req.body)
        res.status(httpStatus.OK);
        res.json(status);
    } catch (error) {
        next(error);
    }
};