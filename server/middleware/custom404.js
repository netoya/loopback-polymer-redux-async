'use strict';
module.exports = function () {
    var path = require('path');
    return function urlNotFound(req, res, next) {
        let index = path.resolve('client/index.html');
        res.sendFile(index, function (err) {
            if (err) {
                console.error(err);
                res.status(err.status).end();
            }
        });
    };
};