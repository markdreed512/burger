var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, callback) {
        connection.query("SELECT * FROM ??",[table], function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },
    insertOne: function (burgerName, callback) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [burgerName],
            function (err, res) {
                if (err) {
                    throw err;
                }
                callback(res);
            });
    },
    updateOne: function (devouredBool, burgerName) {
        connection.query("UPDATE burgers SET devoured = ? WHERE burger_name = ?", [devouredBool, burgerName],
            function (err, res) {
                console.log("updateOne result: ", res)
            });
    }
};

module.exports = orm;