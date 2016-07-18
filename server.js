var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var table = require('./mongo.js');
var bodyParser = require('body-parser');

var app = express();

var listings = mongoose.model('itemlist', table.List)

app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());

app.get('/listings', function(req, res) {
  listings.find({},function(err, data) {
    if(err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.post('/listings', function(req, res) {
  var list = new table(req.body);
  list.save(function(err,data) {
    if(err) {
      console.log(err);
    } else {
      res.end('saved ' + data);
    }
  })
})

app.delete('/listings/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  listings.remove({_id: id}, function(err, data) {
    if(err) {
      console.log("error: " + err);
    } else {
      console.log(data);
      res.json(data);
    }
  })
})


var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("listening on ", port)
})