const path = require("path");
const PAYMENT_FILE_PATH = path.resolve("./payment-generated.txt");
const faker = require('faker');
const fs = require('fs');
const LINE_ENDING = require('os').EOL;

module.exports = {
    create: function (req, res) {
        const fd = fs.createWriteStream(PAYMENT_FILE_PATH,{ flags: "a" });
        fd.write(faker.commerce.price() + LINE_ENDING);
        fd.end();
        res.status(201).send();
    },

    applyDiscount: function (req, res) {
        //debera de restar una cantidad a cada precio en payment-generated.txt
        const discount = 20;

        const readline = require("readline").createInterface({
            input: require("fs").createReadStream('file.in'),
        });

        readline.on("line", function (line) {
            const price = Number(line)-discount;
            const result = line.replace(/%line%/g,""+ price);
            fs.writeFile(PAYMENT_FILE_PATH, result, "utf8", function (err) {
              if (err) return console.log("Error:"+err);
            });
        });

        res.status(201).json({ message: "" });
    },

    getPromos: function (req, res) {
        res.json([
            {name: "BUENFIN"},
            {name: "HOTSALE"},
            {name: "CYBERMONDAY"},
            {name: "BLACKFRIDAY"},
            {name: "PRIMEDAY"},
        ]);
    }
};
