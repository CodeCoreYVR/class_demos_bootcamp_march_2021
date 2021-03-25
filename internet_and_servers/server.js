const net=require('net');
// net is a module built into NODEJS that is used for creating TCP servers

const server=net.createServer(function(socket){
    // this callback function is an event listener
    // an event listener is a function that will trigger on a specified event
    socket.on('data',function(data){
        // data event listener. Whenever the server received 'data' it will trigger this callback and pass that data to callback
        // the data rgument represent the data coming in from a client's requrest
        console.log('Server got data:',data.toString());
        // We are just displaying the data received from client
        // the data receive from client is the 'stream' of data that we need to convert it to string to process it.
        socket.write('Roger:' + data.toString());
        // this is how we reply back / write back to the client
    })
    // socket.on('end',()=>{
    //     console.log('--------Conection closed ---------')
    // }) // data connection end
})



const PORT=7000; // the port of server
const ADDRESS='127.0.0.1'; // the ip address of server 

server.listen(PORT, ADDRESS, ()=>{`Server is listening on ${ADDRESS}:${PORT}`});
//  server.listen is used to make the server listen for request from the client at given address 