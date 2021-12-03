const httpStatus = require('http-status');
const Product = require('../models').Product
const Category = require('../models').Category

exports.get = async (req, res, next) => {
    try {
        let product = await Product.get(req.params.product)
        res.status(httpStatus.OK);
        res.json(product);
    } catch (error) {
        next(error);
    }
};

exports.listByCategory = async (req, res, next) => {
    try {
        let products = await Product.findAll({
            include: {all: true}, where: {
                categoryId: req.params.categoryId
            }
        })
        res.status(httpStatus.OK);
        res.json(products);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let products = await Product.findAll({include: {all: true}})
        res.status(httpStatus.OK);
        res.json(products);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        let product = await Product.create(req.body)
        res.status(httpStatus.OK);
        res.json(product);
    } catch (error) {
        next(error);
    }
};

exports.topSales = async (req, res, next) => {
    try {
        let products = await Product.findAll({
            order: [['sales', 'desc']],
            limit: 5,
            include: {all: true}
        })
        res.status(httpStatus.OK);
        res.json(products);
    } catch (error) {
        next(error);
    }
};