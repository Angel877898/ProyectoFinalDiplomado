//deberas de utilizar faker para generar los datos
module.exports = {
    createShipment: function (req, res) {
        //debera de simular un envio con dirección un precio y una persona con sus datos
        res.status(201).send();
    },
    changeStatus: function (req, res) {
        //Debera de retornar una dirección random
        // codigo de respuesta 201
        // data la direcciòn random
        res.json({addres: ""});
    },
};
