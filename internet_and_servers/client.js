const net = require('net');

const client =new net.Socket();

client.on('data', function(data){
    console.log('Data received from server:' + data)
})
client.connect(7000,'127.0.0.1', ()=>{
    client.write('Tam');
})