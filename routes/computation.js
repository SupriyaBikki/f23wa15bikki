var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 if(req.query.x==undefined) {
    tutu = Math.random();
 } 
 else {
    tutu = req.query.x;
 }
 var result = Math.asin(tutu);
  res.render('computation', { bye: `Math.asin(${tutu}) is ${result}` });
});

module.exports = router;