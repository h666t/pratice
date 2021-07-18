var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/yyy', function(req, res, next) {
  res.send('yyy');
});

module.exports = router;
