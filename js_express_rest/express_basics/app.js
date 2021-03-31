const express=require('express'); //returns a function that returns instance of an express app.
const logger=require('morgan');
const path=require('path');
const cookieParser=require('cookie-parser');//cookie-parser is a middle, that modifies the response and request objects that are given to all the routes. It adds a property to the "request" object named as 'cookies' which is again a object of key value pairs.
// In addition to this it also adds a methoto "response" object called 'cookie()' which will be used to set the cookies.

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
// path.join('/','user','naveed'); //returned => '/user/naveed'
app.use(express.urlencoded({extended:true}));
// this is a middleware that will decode the data that was submiited by the POST HTTB verb
// When the "extend" option is set to tru it will allow to form the data to take shape of an opbect or arrays. But if it is set to false we will not get string of data.
//  it will modify the request object given to routes by addin a property to it and named it as 'body'. So 'request.body' will be an object containing the data from our form.

const pathToStaticAssets=path.join(__dirname,'public')
app.use(express.static(pathToStaticAssets));

app.use(logger('dev'));
app.use((req,res,next)=>{
    // console.log('My Customised Middleware:');
    console.log(`My Customised log: ${new Date()} - ${req.method} - ${req.url}`)
    // console.log(req);
    next();
});

app.set('view engine','ejs');
app.set('views','views')

app.use(cookieParser()); 

app.use((req,res,next)=>{
    console.log('cookies:', req.cookies);
    const username= req.cookies.username; // Fetching username from cookies

    res.locals.loggedInUserName=username || '';
    // 👆🏻 This is how we set properties on "response.locals" to create a variable that are global
    // and are available to all rendered templates
    next();
})

// __________
// Routes
// __________
const baseRouter=require('./routes/base');
const postsRouter=require('./routes/postRoutes');
app.use('/',baseRouter);
app.use('/posts',postsRouter);


// _______________
// RUN SERVER 
// _______________
const PORT=3000;
const DOMAIN='localhost'; // loopback address: 127.0.0.1

app.listen(PORT,DOMAIN,()=>{
    console.log(`🖥 Server is listening on http://${DOMAIN}:${PORT}`)
})








