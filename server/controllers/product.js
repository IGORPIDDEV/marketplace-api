const httpStatus = require('http-status');
const Product = require('../models').Product
const Category = require('../models').Category
const Favorite = require('../models').Favorite
const Unit = require('../models').Unit
const Status = require('../models').Status

exports.get = async (req, res, next) => {
    try {
        let product = await Product.get(req.params.product);
        res.status(httpStatus.OK);
        res.json(product);
    } catch (error) {
        next(error);
    }
};

exports.listByCategory = async (req, res, next) => {
    try {
        let orderKey = (req.body.sort && Object.keys(req.body.sort) && Object.keys(req.body.sort)[0]) ?
            Object.keys(req.body.sort)[0] :
            'sales';
        let orderValue = (req.body.sort && Object.values(req.body.sort) && Object.values(req.body.sort)[0]) ?
            Object.values(req.body.sort)[0].toUpperCase() :
            'DESC';
        let products = await Product.findAll({
            // include: {all: true},
            include: [{
                model: Category,
                as: 'category'
            }, {
                model: Unit,
                as: 'unit'
            }, {
                model: Status,
                as: 'status'
            }, {
                model: Favorite,
                as: 'favorite',
                where: {
                    userId: 9
                },
                required: false
            }],
            where: {
                categoryId: req.params.categoryId
            },
            order: [
                [orderKey, orderValue],
            ],
        });
        res.status(httpStatus.OK);
        res.json(products);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let products = await Product.findAll({include: {all: true}});
        res.status(httpStatus.OK);
        res.json(products);
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
        });
        res.status(httpStatus.OK);
        res.json(products);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        let product = await Product.create(req.body);
        res.status(httpStatus.OK);
        res.json(product);
    } catch (error) {
        next(error);
    }
};

exports.addToFavorite = async (req, res, next) => {
    try {
        let favorite = await Favorite.create(req.body);
        res.status(httpStatus.OK);
        res.json(favorite)
    } catch (error) {
        next(error);
    }
}

exports.removeFromFavorite = async (req, res, next) => {
    try {
        await Favorite.destroy({
            where: {
                id: req.body.favoriteId
            }
        })
        res.status(httpStatus.OK);
        res.json({})
    } catch (error) {
        next(error);
    }
}