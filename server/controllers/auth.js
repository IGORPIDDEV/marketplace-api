const User = require('../models').User
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const {Sequelize} = require('sequelize')

exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!(email && password)) {
            res.status(400).send('All fields are required')
        }
        const user = await User.findOne({
            where: {
                email
            }
        });

        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign(
                    {id: user.id, email},
                    process.env.JWT_SECRET,
                    {expiresIn: '2d'}
                );
                user.token = token;
                res.status(200).json(user);
            } else {
                res.status(400).send('Wrong login or password')
            }
        } else {
            res.status(400).send('This Email is not registered in the system')
        }


    } catch (error) {
        next(error);
    }
};

exports.register = async (req, res, next) => {
    try {
        const {email, password, phone, data} = req.body;
        if (!(email && password && phone)) {
            res.status(400).send('All fields are required');
        }
        const oldUser = await User.findOne({
            where: {
                email
            }
        });
        if (oldUser) {
            res.status(409).send('This email is already in use in the system');
        } else {
            let encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                email: email.toLowerCase(),
                password: encryptedPassword,
                phone,
                data
            });
            const token = jwt.sign(
                {id: user.id, email},
                process.env.JWT_SECRET,
                {expiresIn: '1m'}
            );
            user.token = token;
            res.status(201).json(user);
        }

    } catch (error) {
        console.log('register error: ', error)
        next(error);
    }
};

exports.check = async (req, res, next) => {
    try {
        let user = await User.findOne({
            where: {
                email: res.user.email
            }
        })
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};