var express = require('express');
var router = express.Router();
var stock_controller = require('../controller/stock.controller');

  router.get('/home', stock_controller.index);

  router.get('/stocklist', stock_controller.stock_list);

  router.get('/stock_pkt_search/vnm/:vnm/cert_no/:cert_no', stock_controller.stock_pkt_search);

  router.post('/stock_search', stock_controller.stock_search);
  
module.exports = router;
