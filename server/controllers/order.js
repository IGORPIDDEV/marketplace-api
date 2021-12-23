const httpStatus = require('http-status');
const Order = require('../models').Order
const Product = require('../models').Product

exports.get = async (req, res, next) => {
    try {
        let order = await Order.get(req.params.order);
        res.status(httpStatus.OK);
        res.json(order);
    } catch (error) {
        next(error);
    }
};

exports.list = async (req, res, next) => {
    try {
        let orders = await Order.findAll({include: {all: true}});
        res.status(httpStatus.OK);
        res.json(orders);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        let order = await Order.create(req.body);
        res.status(httpStatus.OK);
        res.json(order);
    } catch (error) {
        next(error);
    }
};