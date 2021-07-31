// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;

const express = require('express')
const router = express.Router()

router.get('/', (request,response,next) => {
  response.send('/')
  response.end()
})

router.get('/:id', (request,response,next) => {
  response.send(request.params)
  response.end()
})

router.get('/:id/edit', (request,response,next) => {
  response.send('edit')
  response.end()
})

module.exports = router
