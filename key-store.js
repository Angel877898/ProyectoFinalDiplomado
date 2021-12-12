const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {  
    try{
        const apiKey = shortid.generate();
        const fd = fs.createWriteStream(VALID_KEYS_PATH, {flags:'a'});
        fd.write(apiKey + LINE_ENDING);
        fd.end();
        return res.status(201).send({ apiKey });
    }catch(error){
        return res.status(404).send({ error:"Something went bad :c /n "+error });
    }
};

