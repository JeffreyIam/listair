var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var port = process.env.MONGODB_URI || "mongodb://localhost/lilterio";
mongoose.connect(port);

var db = mongoose.connection;

db.on('error', console.erro.bind(console, 'connection errors: '));
db.once('open', function() {
  console.log("Mongodb connection open");
})

var theList = new mongoose.Schema({
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

var List = mongoose.model('theList', thelist);
module.exports = List;

new List({item: xbox, description: white xbox, price: 30}, function() {
  console.log('successfully saved chicken lul')
})
