var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('data1', function(msg1){
    io.emit('data1', msg1);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
