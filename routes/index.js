var express = require('express');
var router = express.Router();
var app = express();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  req.requestTime = Date.now();
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: req.requestTime });
});

module.exports = router;
