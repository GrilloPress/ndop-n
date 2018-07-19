var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' );
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render( 'index' );
});

// GET v1 index page.
router.get('/N', function(req, res, next) {
  res.render( 'N/index' );
});

// GET v1 index page.
router.get('/N/01-overview', function(req, res, next) {
  res.render( 'N/app/index' );
});

// GET v1 index page.
router.get('/N/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release/00-other-ways-to-manage-your-choice' );
});

// catch all GET routes

router.get('/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( theView );
});

router.get('/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( theDir + '/' + theView );
});

router.get('/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( theDir + '/' + theDir2 + '/' + theView );
});

module.exports = router;
