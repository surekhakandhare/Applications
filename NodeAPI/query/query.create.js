
var memcached = require('../utility/memcach.utility.js');
const parseJson = require('parse-json');

exports.report_query_create = function(filter) {
     var query = {};
	 
     for(var key in filter) {
		
      var lprpValue = filter[key];
	  
  //    var lprpType = mprp.get(lprpValue+"T");
    
     if(lprpValue.indexOf('#')!=-1){
        lprpLst = lprpValue.split("#");
        var lprpIntLst=[];
        var valueJson ={};
        for (var i = 0; i < lprpLst.length; i++) {
         
          lprpIntLst[i]=parseFloat(lprpLst[i]);
        }
        valueJson["$in"]=lprpIntLst;
        query[key]=valueJson;
      }else if(lprpValue.indexOf('@')!=-1){
        lprpLst = lprpValue.split("@");
        if(lprpLst.length ==2){
        var fromvalue = parseFloat(lprpLst[0]);
        var toValue = parseFloat(lprpLst[1]);
        var valueJson ={};
        valueJson["$gte"]=fromvalue;
        valueJson["$lte"]=toValue;
        query[key]=valueJson;
        }
      } else{
        query[key]=lprpValue;
      }
    }
    
     return query;
};