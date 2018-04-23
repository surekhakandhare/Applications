var oracledb   = require("oracledb");
var dbconfig = require('../config/database.config');

var pool = oracledb.createPool({
    connectionLimit : 100,
    host: dbconfig.host,
    user:dbconfig.username,
    password: dbconfig.password,
    database: dbconfig.SID
});


var DB = (function () {

    function Excuete(query, params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                callback(null, err);
                throw err;
            }

            connection.query(query, params, function (err, rows) {
                connection.release();
                if (!err) {
                    callback(rows);
                }
                else {
                    callback(null, err);
                }

            });

            connection.on('error', function (err) {
                connection.release();
                callback(null, err);
                throw err;
            });
        });
    };

    return {
        query:Excuete
    };
})();

module.exports = DB;