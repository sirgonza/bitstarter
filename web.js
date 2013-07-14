var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

 
fs.readFile('index.html', function (err, data) {
  if (err) throw err;

  var b = new Buffer(data, "utf-8")

//  response.send(b.toString());
	
});





response.send(b.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
