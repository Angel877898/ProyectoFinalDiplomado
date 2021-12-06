const fs = require('fs');
const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const utils = require('./test/utils');

module.exports = async function (req, res, next) {
    try {
        const keys = await utils.getKeysFromFile();
        const xApiKey = req.headers['x-api-key'];
        if(!xApiKey) return res.status(401).send();
        if(keys.includes(xApiKey)) return next();
        return res.status(401).send();
    } catch (error) {
        return res.status(401).send({
            error: "keys-notfound"
        });
    }
};
