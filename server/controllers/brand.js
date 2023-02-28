const httpStatus = require('http-status');
const Brand = require('../models').Brand;

exports.get = async (req, res, next) => {
    try {
        let brand = await Brand.findById(req.params.brandId)
        res.status(httpStatus.OK);
        res.json(brand);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let brands = await Brand.findAll({
            where: {
                categoryId: req.params.categoryId
            }
        })
        res.status(httpStatus.OK);
        res.json(brands);
    } catch (error) {
        next(error);
    }
};
