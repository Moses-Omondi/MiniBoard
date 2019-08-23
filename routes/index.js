var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
   text: 'Hi there!',
   user: 'Amando', 
   added: new Date()
  },

  {
   text: 'Hello Word!',
   user: 'Charles', 
   added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function(req, res, next){
  messages.push({name: req.body.name, message: req.body.message, added: new Date()});

  res.redirect('/')
 });

module.exports = router;
