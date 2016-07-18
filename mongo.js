var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var port = process.env.MONGODB_URI || "mongodb://localhost/lilterio";
mongoose.connect(port);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection errors: '));
db.once('open', function() {
  console.log("Mongodb connection open");
})

var itemlist = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

var List = mongoose.model('itemlist', itemlist);
module.exports = List;

List.create({item: "xbox", description: "white xbox", price: 30}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('created xbox');
  }
})
