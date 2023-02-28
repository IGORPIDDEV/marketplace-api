const httpStatus = require('http-status');
const {Sequelize, QueryTypes} = require("sequelize");
const Product = require('../models').Product
const Category = require('../models').Category
const Favorite = require('../models').Favorite
const Unit = require('../models').Unit
const Status = require('../models').Status
const Review = require('../models').Review
const ProductProperty = require('../models').ProductProperty
const FilterProperty = require('../models').FilterProperty
const Filter = require('../models').Filter
const db = require('../models')

exports.get = async (req, res, next) => {
    try {
        let product = await Product.get(req.params.product);
        res.status(httpStatus.OK);
        res.json(product);
    } catch (error) {
        next(error);
    }
};

exports.getProductsInCategory = async (req, res, next) => {
    try {
        let orderKey = (req.body.sort && Object.keys(req.body.sort) && Object.keys(req.body.sort)[0]) ?
            Object.keys(req.body.sort)[0] :
            'sales';
        let orderValue = (req.body.sort && Object.values(req.body.sort) && Object.values(req.body.sort)[0]) ?
            Object.values(req.body.sort)[0].toUpperCase() :
            'DESC';
        let whereCondition = {
            categoryId: req.params.categoryId
        }
        if (parseInt(req.body.statusId)) {
            whereCondition.statusId = {
                [Sequelize.Op.ne]: parseInt(req.body.statusId)
            }
        }
        if (req.body.brandId) {
            whereCondition.brandId = req.body.brandId
        }
        let filters = req.body.filters
        let filterLength = filters.filter(n => n && n.length).length
        if (filterLength){
            let filteredElements = []
            let filteredProducts = await Product.getProductsByCategory(req.body, req.params, filters)
            filteredProducts.forEach(pro => {
                filteredElements.push(pro.id)
            })
            whereCondition.id = {
                [Sequelize.Op.in]: filteredElements
            }
        }

        favoritesCondition = (res.userId) ? { userId: res.userId } : {}
        
        let products = await Product.findAll({
			include: [{
                model: Category,
                as: 'category'
            }, {
                model: ProductProperty,
                as: 'properties',
                include: [{
                    model: FilterProperty,
                    as: 'filterProperty'
                }, {
                    model: Filter,
                    as: 'filter'
                }],
            }, {
                model: Unit,
                as: 'unit'
            }, {
                model: Review,
                as: 'reviews'
            }, {
                model: Status,
                as: 'status'
            }, {
                model: Favorite,
                as: 'favorite',
                where: favoritesCondition,
                required: false
            }],
            where: whereCondition,
            order: [
                [orderKey, orderValue],
            ],
		})
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
        favoritesCondition = (res.userId) ? { userId: res.userId } : {}
        let products = await Product.findAll({
            order: [['sales', 'desc']],
            limit: 4,
            include: [{
                model: Category,
                as: 'category'
            }, {
                model: ProductProperty,
                as: 'properties',
                include: [{
                    model: FilterProperty,
                    as: 'filterProperty'
                }, {
                    model: Filter,
                    as: 'filter'
                }],
            }, {
                model: Unit,
                as: 'unit'
            }, {
                model: Review,
                as: 'reviews'
            }, {
                model: Status,
                as: 'status'
            }, {
                model: Favorite,
                as: 'favorite',
                where: favoritesCondition,
                required: false
            }],
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

exports.getFavorites = async (req, res, next) => {
    try {
        let orderKey = (req.body.sort && Object.keys(req.body.sort) && Object.keys(req.body.sort)[0]) ?
            Object.keys(req.body.sort)[0] :
            'sales';
        let orderValue = (req.body.sort && Object.values(req.body.sort) && Object.values(req.body.sort)[0]) ?
            Object.values(req.body.sort)[0].toUpperCase() :
            'DESC';
        let products = await Product.findAll({
            order: [
                [orderKey, orderValue],
            ],
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
                    userId: req.body.userId
                },
                required: true
            }],
        });
        res.status(httpStatus.OK);
        res.json(products);
    } catch (error) {
        next(error);
    }
}

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

exports.checkAvailability = async (req, res, next) => {
    try {
        let product = await Product.findByPk(req.body.productId)
        if (product.quantity > 0) {
            res.status(httpStatus.OK);
            res.json()
        } else {
            res.status(httpStatus.SERVICE_UNAVAILABLE);
            res.json()
        }
    } catch (error) {
        next(error);
    }
}