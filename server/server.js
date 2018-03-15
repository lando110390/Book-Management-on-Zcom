var express = require('express');
var bodyparser = require('body-parser');
//coder = require('web3/lib/solidity/coder');

var app = express();
app.use('/', express.static(__dirname + '/'));
app.use('/ok', express.static(__dirname + '/index.html'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


app.post('/runtest/',function(req,res){
     console.log('vao router roi',req);
});

//console.log(coder.encodeParam('bytes32', '67yLZOH069GhqgfLK6hBLQP6xH4asWrF'));
//console.log(coder.encodeParam('bytes32', '3637794c5a4f4830363947687167664c4b3668424c5150367848346173577246'))

var server = app.listen(3000, function() {
  console.log('Server listening on port ' + server.address().port);
});