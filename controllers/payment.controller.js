const PAYMENT_FILE_PATH = 'payment-generated';
const faker = require('faker');
const fs = require('fs');
const LINE_ENDING = require('os').EOL;

module.exports = {
    create: function (req, res) {
        var price = faker.commerce.price();
        var stream = fs.createWriteStream(PAYMENT_FILE_PATH, { flags: "a" });
        stream.write(price + LINE_ENDING);
        stream.end();
        res.status(201).send();
    },

    applyDiscount: function (req, res) {
        //debera de restar una cantidad a cada precio en payment-generated.txt
        res.json({ message: ""});
    },

    getPromos: function (req, res) {
        req.json([
            {name: "BUENFIN"},
            {name: "HOTSALE"},
            {name: "CYBERMONDAY"},
            {name: "BLACKFRIDAY"},
            {name: "PRIMEDAY"},
        ]);
    }
};
