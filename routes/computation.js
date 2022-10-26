var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { value: `math.log2() applied to ${x} is ${Math.log2(x)}`,
    value1: `math.cosh() applied to ${x} is ${Math.cosh(x)}` ,
    value2: `math.floor() applied to ${x} is ${Math.floor(x)}` });
  }
  else{

    for (let a in req.query) {

      console.log(a)

      res.render('computation', { value: `math.log2() applied to ${req.query[a]} is ${Math.log2(req.query[a])}`,
      value1: `math.cosh() applied to ${req.query[a]} is ${Math.cosh(req.query[a])}` ,
      value2: `math.floor() applied to ${req.query[a]} is ${Math.floor(req.query[a])}` })

    }
  }


});


module.exports = router;
