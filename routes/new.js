var express = require('express');
var router = express.Router();

/* GET new-message listing. */
router.get('/', function(req, res, next) {
  res.render('form', {'title':'Form'});
});

module.exports = router;
