const httpStatus = require('http-status');
const Category = require('../models').Category

exports.get = async (req, res, next) => {
    try {
        let category = await Category.get(req.params.category)
        res.status(httpStatus.OK);
        res.json(category);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let categories = await Category.listAll()
        res.status(httpStatus.OK);
        res.json(categories);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        let category = await Category.create(req.body)
        res.status(httpStatus.OK);
        res.json(category);
    } catch (error) {
        next(error);
    }
};