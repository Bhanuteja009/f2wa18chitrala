var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var x=Math.random();
  
  res.render('computation', { value: `math.log2() applied to ${x} is ${Math.log2(x)}`,
  value1: `math.cosh() applied to ${x} is ${Math.cosh(x)}` ,
  value2: `math.floor() applied to ${x} is ${Math.floor(x)}` });


});


module.exports = router;
