var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var schema = require('./mongo.js');
var bodyParser = require('body-parser');

var app = express();

var listings = mongoose.model('itemlist', schema.List)

app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());

app.get('/listings', function(req, res) {
  listings.find({},function(err, data) {
    if(err) {
      console.log(err);
    } else {
      console.log('getting from server.js');
      res.json(data);
    }
  });
});

app.post('/listings', function(req, res) {
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