var connection = require("../config/connection.js")


var orm = {
    selectALL:function(input,res) {
        var queryString = "SELECT * FROM" + input + ";";
        connection.query(queryString, function(err, result) {
            if (err) { throw err;
           }
            res(result);
            console.log(result)
        })
    }
}







module.exports = orm