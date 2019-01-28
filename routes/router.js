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
  res.render( 'N/app/01-how-would-you-like-to-confirm-your-identity' );
});

// GET v1 index page.
router.get('/N/app/index', function(req, res, next) {
  res.render( 'N/app/01-how-would-you-like-to-confirm-your-identity' );
});

// GET v1 index page.
router.get('/N/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release/00-other-ways-to-manage-your-choice' );
});

// GET v1 index page.
router.get('/no2fa', function(req, res, next) {
  res.render( 'no2fa/index' );
});

// GET v1 index page.
router.get('/no2fa/01-overview', function(req, res, next) {
  res.render( 'no2fa/app/00-how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/v0', function(req, res, next) {
  res.render( 'v0/index' );
});

// GET v1 index page.
router.get('/v1', function(req, res, next) {
  res.render( 'v1/index' );
});

// GET v1 index page.
router.get('/v0/01-overview', function(req, res, next) {
  res.render( 'v0/app/01-how-would-you-like-to-confirm-your-identity' );
});

// GET v1 index page.
router.get('/v0/app/index', function(req, res, next) {
  res.render( 'v0/app/01-how-would-you-like-to-confirm-your-identity' );
});

// GET v1 index page.
router.get('/v0/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release/00-other-ways-to-manage-your-choice' );
});

// GET v1 index page.
router.get('/v1/01-overview', function(req, res, next) {
  res.render( 'v1/app/how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/v1/app/index', function(req, res, next) {
  res.render( 'v1/app/how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/v2/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release/00-other-ways-to-manage-your-choice' );
});

// GET v1 index page.
router.get('/v2/01-overview', function(req, res, next) {
  res.render( 'v2/app/how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/v2/app/index', function(req, res, next) {
  res.render( 'v2/app/how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/v2/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release/00-other-ways-to-manage-your-choice' );
});

// GET v1 index page.
router.get('/A/01-overview', function(req, res, next) {
  res.render( 'A/app/how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/A/app/index', function(req, res, next) {
  res.render( 'A/app/how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/A/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release/00-other-ways-to-manage-your-choice' );
});

// GET v1 index page.
router.get('/B/01-overview', function(req, res, next) {
  res.render( 'B/app/01-do-you-have-your-nhs-number' );
});

// GET v1 index page.
router.get('/B/app/index', function(req, res, next) {
  res.render( 'B/app/01-do-you-have-your-nhs-number' );
});

// GET v1 index page.
router.get('/B/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release/00-other-ways-to-manage-your-choice' );
});

// GET v1 index page.
router.get('/v2-how/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release-how/00-other-ways-to-manage-your-choice' );
});

// GET v1 index page.
router.get('/v2-how/01-overview', function(req, res, next) {
  res.render( 'v2-how/app/how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/v2-how/app/index', function(req, res, next) {
  res.render( 'v2-how/app/how-to-manage-your-choice-online' );
});

// GET v1 index page.
router.get('/v2-how/00-other-ways-to-manage-your-choice', function(req, res, next) {
  res.render( 'release-how/00-other-ways-to-manage-your-choice' );
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

router.get('/:subdir/:subdir2/:subdir3/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  var theDir3 = req.params.subdir3;
  res.render( theDir + '/' + theDir2 + '/' + theDir3 + '/' + theView );
});

router.get('/:subdir/:subdir2/:subdir3/:subdir4/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  var theDir3 = req.params.subdir3;
  var theDir4 = req.params.subdir4;
  res.render( theDir + '/' + theDir2 + '/' + theDir3 + '/' + theDir4 + '/' + theView );
});

module.exports = router;
