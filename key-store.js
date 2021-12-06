const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {  
    const apiKey = shortid.generate();
    const fd = fs.openSync(VALID_KEYS_PATH, 'a');
    //fs.appendFileSync(fd, apiKey + LINE_ENDING, 'utf8');
    return res.status(201).send({ apiKey });
};

