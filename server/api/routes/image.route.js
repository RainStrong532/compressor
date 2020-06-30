'use strict';

module.exports = function(app) {
    var todoList = require('../controller/image.controller');

    // todoList Routes
    app.route('/upload')
        .post(todoList.upload)
};