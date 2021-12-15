
module.exports = {
    create: function (req, res) {
        try {
            // ...
            res.status(201).send();
        } catch (e) {
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        }
    },

    getAll: function (req, res) {
        try {
            // ...
            res.status(201).json([{id: 1, name: 'QA Test App'}]);
        } catch (e) {
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        }
    },

    getById: function (req, res) {
        try {
            // ...
            res.status(201).json({id: 1, name: 'QA Test App'});
        } catch (e) {
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        }
    }
};
