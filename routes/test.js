var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : ''
});


router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
/* GET users listing. */
router.get('/', function(req, res, next) {


	connection.query('SELECT usr_name FROM  users', function(err, rows, fields) {
	  if (err) throw err;

	  console.log('The solution is: ', rows[0], rows[1]);
	});

  res.send('test');
  next();
});
router.post('/', function(req, res, next) {
  console.log('ruta por post '+req.body.User);
  res.send(req.body.User)  
  next();
});
router.get('/:id', function(req, res, next) {
  res.send('test + id');
  next();
});
router.use(function (req, res, next) {
  console.log('middle');
});

module.exports = router;
