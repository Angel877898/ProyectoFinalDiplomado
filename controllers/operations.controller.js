
module.exports = {
    sum: function (req, res) {
        try {
            let a = req.query("a");
            let b = req.query("b");
            res.status(201).send(a+b);
        } catch (e) {
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        }

    },

    substract: function (req, res) {
        try {
            let a = req.query("a");
            let b = req.query("b");
            res.status(201).send(a-b);
        } catch (e) {
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        }

    },

    multiply: function (req, res) {
        try {
            let a = req.query("a");
            let b = req.query("b");
            res.status(201).send(a*b);
        } catch (e) {
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        }
    },

    divide: function (req, res) {
        try {
            let a = req.query("a");
            let b = req.query("b");
            if(b===0){
                Sentry.captureMessage("No se puede dividir entre 0");
                res.status(401).send({error: "No se puede dividir entre 0"})
            }else{
                res.status(201).send(a/b);
            }
        } catch (e) {
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        }
    }
};