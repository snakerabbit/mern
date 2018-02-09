var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');

var app = express();
var router = express.Router();
var port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://alisoncheng:password@ds141514.mlab.com:41514/mern');
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

router.get('/', function(req, res){
  res.json({
    message: 'API Initialized!'
  });
  router.route('/comments').get(function(req1, res1) {
    Comment.find(function(err, comments){
      if(err)
        res1.send(err);
        res1.json(comments);
    });
  }).post(function(req2, res2) {
    var comment = new Comment();
    comment.author = req2.body.author;
    comment.text = req2.body.text;
    comment.save(function(err) {
      if (err)
        {res2.send(err);}
        res2.json({
          message: 'Comment successfully added!'
        });
    });
  });
});

app.use('/api', router);

app.listen(port, function(){
  console.log(`api running on port ${port}`);
});
