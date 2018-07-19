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
router.get('/M', function(req, res, next) {
  res.render( 'M/index' );
});

// GET v1 index page.
router.get('/M/01-overview', function(req, res, next) {
  res.render( 'M/app/index' );
});

// GET v1 index page.
router.get('/M/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release/00-other-ways-to-manage-your-choice' );
});


// GET v1 index page.
router.get('/M1', function(req, res, next) {
  res.render( 'M1/index' );
});

// GET v1 index page.
router.get('/NHSUK', function(req, res, next) {
  res.render( 'NHSUK/index' );
});

// GET v1 index page.
router.get('/NEXT', function(req, res, next) {
  res.render( 'NEXT/index' );
});

// GET v1 index page.
router.get('/NEXT-alt-1', function(req, res, next) {
  res.render( 'NEXT-alt-1/index' );
});

// GET v1 index page.
router.get('/NEXT-alt-2', function(req, res, next) {
  res.render( 'NEXT-alt-2/index' );
});

// GET v1 index page.
router.get('/M3', function(req, res, next) {
  res.render( 'M3/index' );
});

// GET v1 index page.
router.get('/M4', function(req, res, next) {
  res.render( 'M4/index' );
});

// GET v1 index page.
router.get('/M5', function(req, res, next) {
  res.render( 'M5/index' );
});

// GET v1 index page.
router.get('/release', function(req, res, next) {
  res.render( 'release/index' );
});

// GET v1 index page.
router.get('/test', function(req, res, next) {
  res.render( 'test/index' );
});

// GET v1 index page.
router.get('/future', function(req, res, next) {
  res.render( 'future/index' );
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
