#!/usr/bin/env node

var fs = require('fs');

fs.readFile('index.html', function (err, data) {
  if (err) throw err;

  var b = new Buffer(data, "utf-8")

  console.log(b.toString());
	
});
