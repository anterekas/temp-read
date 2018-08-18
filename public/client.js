var socket= io.connect('http://localhost:4000');

var output=document.getElementById('Serial_Read');

socket.on('temp',function(data){
  console.log(data.temp);
 document.getElementById('Serial_Read').innerHTML=data.temp;
  data.push(data.temp);
});
