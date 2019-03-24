var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (burgerName, callback) {
        orm.insertOne(burgerName, function (res) {
            callback(res);
        });
    },
    updateOne: function (devouredBool, burgerName, callback) {
        orm.updateOne(devouredBool, burgerName, function (res) {
            callback(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
