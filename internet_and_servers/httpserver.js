const http=require('http');



const server = http.createServer(function(request,response){
    console.log(request.url)
    let splitedURL = request.url.split('?')
    console.log(splitedURL[1])
    response.writeHead(200, {'content-Type':'text/html'});
    response.write(`<!DOCTYPE html>
            <html>
            <head>
            <title>
            My First Webserver
            </title>
            </head>
            <body>
            <h1>Hello World!</h1>
            </body>
            </html>
    `)
    response.end();
})

server.listen(4040);
console.log('Server is listening on port 4040');