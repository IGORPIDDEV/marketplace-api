const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send('Токен отсутствует');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(403).send('Неверная подпись');
    }
    return next();
};

const decodeHeader = (req, res, next) => {
    let token = req.headers.authorization || req.body.token || req.headers['x-access-token']
    if (!token) {
        return res.status(401).send('Токен отсутствует');
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
        if (!token || token === '') return res.status(401).send('Токен отсутствует');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) return res.status(403).send('Неверная подпись');
    if (decoded) res.user = decoded
    res.token = token
    return next()
}

module.exports = {verifyToken, decodeHeader};