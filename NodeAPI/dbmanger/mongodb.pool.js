var async = require('async');
const MongoClient = require('mongodb').MongoClient
 
var dbConfig = require("../config/database.config");
var REPORT_URL = dbConfig.url;
 
   function connect(REPORT_URL) {
    return MongoClient.connect(REPORT_URL).then(client => client.db())
  }
   
  module.exports = async function() {
    let databases = await Promise.all([connect(REPORT_URL)])
   
    return {
      dbconnection: databases[0]
     
    }
  }