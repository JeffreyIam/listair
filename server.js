var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/"))

app.get('/thelist', function(req, res) {

})

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("listening on ", port)
})