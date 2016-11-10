var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('data1', function(msg1){
    io.emit('data1', msg1);
  });
});

http.listen(port, function(){
  console.log('listening on *:5000');
});
