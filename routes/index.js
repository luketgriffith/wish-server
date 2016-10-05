var express = require('express');
var router = express.Router();
var vogels = require('vogels');
vogels.AWS.config.loadFromPath('./config.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
