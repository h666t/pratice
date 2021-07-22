var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/xxx', function(req, res, next) {
  res.render('mine/index.ejs',{title: 'mine'})
  // res.send('xxx');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
