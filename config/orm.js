var connection = require ('./connection.js');

function questionMark(num) {
  var array = [];

  for (var i = 0; i < num; i++) {
    array.push("?");
  }
  return array.toString();
}

function sqlObject (so) {
  var array = [];

  for (var key in so) {
    array.push(key + "=" + so[key]);
  }
  return array.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += questionMark(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(table, colVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += colVals(colVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;