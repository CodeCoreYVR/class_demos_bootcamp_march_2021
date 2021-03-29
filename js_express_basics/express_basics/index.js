const express=require('express'); //returns a function that returns instance of an express app.
const logger=require('morgan');

const app=express();// The app variable reference in index.js is an object with bunch of methods to cofigure our app, some common method that we use are :


// app.use() to initialize middleware
// app.engine() to set view engine of express
// app.listen() to start the express server

//  CRUD METHODS inside app
/*
app.get
app.post
app.patch
app.delete
*/
app.use(logger('dev'));

app.set('view engine','ejs');
app.set('views','views')

app.get('/',(request,response)=>{
    //your code here
    // response.send('<h1>Welcome</h1>');
    response.render('welcome',{
        title: 'Welcome to Meme Page',
        memes:[
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
      "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
      "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg"
        ] 
    })
});
app.get('/hello_world',(request,response)=>{
    //your code here
    // response.send('<h1>Hello World</h1><p>Welcome to the coding</p>');
    response.render('hello_world')
});
app.get('/survey',(request,response)=>{
    
    response.render('survey');
});

app.get('/submit',(req,res)=>{
    console.log('URL Query:', req.query);
    const fullName=req.query.fullName;
    const favouriteColor=req.query.favouritColor;
    const message=req.query.message;
    res.render('thank_you',{
        fullName:fullName,
        favouriteColor:favouriteColor,
        message:message
    });
});


const PORT=3000;
const DOMAIN='localhost'; // loopback address: 127.0.0.1

app.listen(PORT,DOMAIN,()=>{
    console.log(`🖥 Server is listening on http://${DOMAIN}:${PORT}`)
})








