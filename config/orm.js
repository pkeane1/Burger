var connection = require("../config/connection.js")

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
// loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    selectALL:function(input,callback) {
        var queryString = "SELECT * FROM" + input + ";";
        connection.query(queryString, function(err, result) {
            if (err) { throw err;
           }
            callback(result);
            console.log(result)
        })
    },

    insertOne:function(table, cols, vals, callback) {
        

    } 




}


module.exports = orm