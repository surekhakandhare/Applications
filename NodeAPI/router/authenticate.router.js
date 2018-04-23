var express = require('express');
var router = express.Router();
var authenticate_controller = require('../controller/authenticate.controller');

  router.get('/webAuthentication', authenticate_controller.webAuthentication);


  
module.exports = router;
