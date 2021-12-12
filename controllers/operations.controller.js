module.exports = {
    sum: function (req, res) {
        let a = req.query("a");
        let b = req.query("b");
        res.status(201).send(a+b);
    },

    substract: function (req, res) {
        let a = req.query("a");
        let b = req.query("b");
        res.status(201).send(a-b);
    },

    multiply: function (req, res) {
        let a = req.query("a");
        let b = req.query("b");
        res.status(201).send(a*b);
    },

    divide: function (req, res) {
        let a = req.query("a");
        let b = req.query("b");
        if(b==0){
            res.status(401).send({error: "No se puede dividir entre 0"})
        }else{
            res.status(201).send(a/b);
        }
        
    }
};