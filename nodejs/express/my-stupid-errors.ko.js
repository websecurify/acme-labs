var express = require('express');
var app = express();

// ---

app.get('/', function(req, res, next){
	next(new Error('bam!'));
});

// ---

app.use(function (err, req, res, next) {
	res.send(500);
});

// ---

var server = app.listen(3000, function() {
	console.log('listening on port %d', server.address().port);
});

// ---
