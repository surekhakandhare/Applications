var mongodb = require("mongodb");




exports.mongodb_report_query = function(db,table,column,query,sort,res,callback) {
  
       
       
        var projection = new Map();
        for (var i = 0; i < column.length; i++) {
            projection.set(column[i],1.0);
        }
        var sort = [];
        for (var i = 0; i < sort.length; i++) {
            var srt = [sort[i],1];
            sort.push(srt);
        }
        
        db.dbconnection.collection(table).find(query).project(projection).sort(sort).toArray(function(error, documents) {
            if( error ) callback(error)
            else callback(null, documents);
         });
    

};