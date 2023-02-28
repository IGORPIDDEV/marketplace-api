const httpStatus = require('http-status');
const Filter = require('../models').Filter;

exports.get = async (req, res, next) => {
    try {
        let filter = await Filter.findById(req.params.filterId)
        res.status(httpStatus.OK);
        res.json(filter);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let filters = await Filter.findAll({
            where: {
                categoryId: req.params.categoryId
            },
            include: { all: true }
        })
        res.status(httpStatus.OK);
        res.json(filters);
    } catch (error) {
        next(error);
    }
};
