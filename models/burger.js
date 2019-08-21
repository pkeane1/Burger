var orm = require("../config/orm.js");


var burger = {
    selectAll: function (Callback) {
        orm.selectAll("burgers", function (res) {
            Callback(res);
        });
    },
    // The variables colums and values are arrays. Callback, and response
    insertOne: function (cols, vals, Callback) {
        orm.insertOne("burgers", cols, vals, function (res) {
            Callback(res);
        });
    },
    updateOne: function (objColVals, condition, Callback) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            Callback(res);
        });
    },
    deleteOne: function (condition, Callback) {
        orm.deleteOne("burgers", condition, function (res) {
            Callback(res);
        });
    }
};
// Export the database functions for the controller (burgersController.js).
module.exports = burger;