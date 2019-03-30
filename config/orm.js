var connection = require("../config/connection.js");

var orm = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (err, res) {
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
    updateOne: function (devouredBool, id) {
        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devouredBool, id],
            function (err, res) {
                console.log("updated!")
            });
    }
};

module.exports = orm;