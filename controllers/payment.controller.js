const path = require("path");
const PAYMENT_FILE_PATH = path.resolve("./payment-generated.txt");
const faker = require("faker");
const fs = require("fs");
const LINE_ENDING = require("os").EOL;


module.exports = {
  create: function (req, res) {
    try {
      let fd = fs.createWriteStream(PAYMENT_FILE_PATH, { flags: "a" });
      fd.write(faker.commerce.price() + LINE_ENDING);
      fd.end();
      res.status(201).send();
    } catch (e) {
      res.statusCode = 500;
      res.end(res.sentry + "\n");
    }
  },

  applyDiscount: function (req, res) {
    try {
      //debera de restar una cantidad a cada precio en payment-generated.txt
      let { discount } = req.body;

      let readline = require("readline").createInterface({
        input: require("fs").createReadStream(PAYMENT_FILE_PATH),
      });

      readline.on("line", function (line) {
        let price = Number(line);
        price = (price - discount).toFixed(2);
        fs.readFile(PAYMENT_FILE_PATH, 'utf8', function(err, data) {
          let format = new RegExp('^.*' + line + '.*$', 'gm');
          format = data.replace(format, ''+newPrice+LINE_ENDING);
          fs.writeFile(PAYMENT_FILE_PATH,formatted,(err, file)=>{
            if(err) console.log(err);
          });
        });
      });
      res.json({ message: "Archivo modificado" });
    } catch (e) {
      res.statusCode = 500;
      res.end(res.sentry + "\n");
    }

  },

  getPromos: function (req, res) {
    try {
      let response = [
        { name: "BUENFIN" },
        { name: "HOTSALE" },
        { name: "CYBERMONDAY" },
        { name: "BLACKFRIDAY" },
        { name: "PRIMEDAY" },
      ]
      res.json(response);
    } catch (e) {
      res.statusCode = 500;
      res.end(res.sentry + "\n");
    }
  },
};