const http=require('http');



const server = http.createServer(function(request,response){
    const urlString=request.url
    console.log(urlString);
    let queryString = urlString.split('?')[1]; // [1]👈🏻  was missing for code to work
    console.log(queryString);
    const query={};
    if(queryString){
        queryString.split('&').forEach(
            keyValuePair =>{
                const splitKeyValuePair = keyValuePair.split('=');
                query[splitKeyValuePair[0]]=splitKeyValuePair[1];
                }
        )
    }
    console.log('q',query);

    const f=query.temp;
    console.log('f',f);
    const c= (f -32) * (5/9);
    console.log('c',c);
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
            Converted tempurature is : ${c}
            </body>
            </html>
    `)
    response.end();
})

server.listen(4040);
console.log('Server is listening on port 4040');