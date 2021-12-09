const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {  
    const apiKey = shortid.generate();
    const fd = fs.createWriteStream(VALID_KEYS_PATH, {flags:'a'});
    fd.write(apiKey + LINE_ENDING);
    fd.end();
    if(apiKey){
        return res.status(201).send({ apiKey });

    }else{
        return res.status(401);
    }
};

