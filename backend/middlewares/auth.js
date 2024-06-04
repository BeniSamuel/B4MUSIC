const jwt = require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config()

module.exports = function (req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Unauthorised');

    try {
        const decoded = jwt.verify(token, process.env.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
};
