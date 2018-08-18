var express = require('express');
var socket = require('socket.io');
const SerialPort=require('serialport');

var app = express();

var server=app.listen(4000,function(){
  console.log('listeninig on Port 4000');
});
app.use(express.static('public'));

var io=  socket(server); //socket setup


const Readline=SerialPort.parsers.Readline;
const port=new SerialPort('COM11');
const parser=port.pipe(new Readline({delimiter:'\r\n'}));

parser.on('data',function(temp){
  io.sockets.emit('temp',{temp:temp});
});

io.on('connection',function(socket){
  console.log('Someone Connected.');
})
