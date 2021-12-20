const User = require('../models').User
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!(email && password)) {
            res.status(400).send('Все поля обязательны к заполнению')
        }
        const user = await User.findOne({email});
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
                res.status(400).send('Неверный логин или пароль')
            }
        } else {
            res.status(400).send('Данный Email не зарегистрирован в системе')
        }


    } catch (error) {
        next(error);
    }
};

exports.register = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!(email && password)) {
            res.status(400).send('Все поля обязательны к заполнению');
        }
        const oldUser = await User.findOne({email});
        if (oldUser) {
            res.status(409).send('Такой email уже используется в системе');
        } else {
            let encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                email: email.toLowerCase(),
                password: encryptedPassword,
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
        next(error);
    }
};

exports.check = async (req, res, next) => {
    try {
        let user = res.user
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};