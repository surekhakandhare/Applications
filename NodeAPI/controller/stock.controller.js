var query = require('../query/query.create');
var queryExcute = require('../query/query.excute.js');
var utility = require('../utility/utility.js')
var memcached = require('../utility/memcach.utility');
const initializeDatabases = require('../dbmanger/mongodb.pool');


exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED:  Home Page');
};

// Display list of all books.
exports.stock_list = function(req, res) {
    res.send('NOT IMPLEMENTED: stock list');
};


exports.stock_search = function(req, res) {
    initializeDatabases().then(db => {
     var outJson={};
     var filter= req.body.FILTER;
     var mdl = req.body.MDL;
     var sort=req.body.SORT;
     var collection="STK_MKTG";
     var cnt= req.body.CNT;
     var queryJson=query.report_query_create(filter);
     var cloumnList=[];
     utility.Get_Rep_prp(req,res,mdl, db,function (error, repPrpList) {
         if(error){

         }else{
         cloumnList=repPrpList;
         }
       
      });
      queryExcute.mongodb_report_query(db,collection,cloumnList,queryJson,sort,res, function (error, document) {
     if(err){
          res.send(error);
       }else{
        outJson["PKTDTL"]=document;
        outJson["COLUMNLIST"]=cloumnList;
          res.send(outJson);
       }});

  }).catch(err => {
    console.error('Failed to make all database connections!')
    console.error(err)
    process.exit(1)
  })
};


exports.stock_pkt_search = function(req, res) {
    res.send(req.params);
};