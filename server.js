var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var schema = require('./mongo.js');
var mongoose = require('mongoose');

var app = express();

var listings = mongoose.model('itemlist', schema.List)

app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());

app.get('/itemlist', function(req, res) {
  listings.find({},function(err, data) {
    if(err) {
      console.log(err);
    } else {
      console.log('getting from server.js');
      res.json(data);
    }
  });
});

app.post('/itemlist', function(req, res) {
  var list = new List(req.body);
  list.save(function(err,data) {
    if(err) {
      console.log(err);
    } else {
      console.log('saved ' + data);
    }
  })
})


var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("listening on ", port)
})