const httpStatus = require('http-status');
const Unit = require('../models').Unit

exports.get = async (req, res, next) => {
    try {
        let unit = await Unit.findById(req.params.unitId)
        res.status(httpStatus.OK);
        res.json(unit);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let units = await Unit.findAll()
        res.status(httpStatus.OK);
        res.json(units);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        let unit = await Unit.create(req.body)
        res.status(httpStatus.OK);
        res.json(unit);
    } catch (error) {
        next(error);
    }
};