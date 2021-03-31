const express=require('express');
const router=express.Router();

const COOKIE_MAX_AGE= 24 * 7 * 60 * 60 * 1000 // A week in milliseconds
router.get('/',(request,response)=>{
    //your code here
    // response.send('<h1>Welcome</h1>');
    response.cookie("myCookie", 'Value_of_cookies',{maxAge: COOKIE_MAX_AGE});

    response.render('welcome',{
        title: 'Welcome to Meme Page',
        memes:[
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
      "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
      "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg"
        ] 
    })
});
router.get('/hello_world',(request,response)=>{
    //your code here
    // response.send('<h1>Hello World</h1><p>Welcome to the coding</p>');
    response.render('hello_world')
});
router.get('/survey',(request,response)=>{
    
    response.render('survey');
});

router.get('/submit',(req,res)=>{
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
router.post('/sign_in',(req,res)=>{
    const params=req.body;
    // 'req.body' is only available if the "urlencoded" middleware is being used.
    //  and it will contain data from submitted form.
    
    res.cookie('username', params.username,{maxAge:COOKIE_MAX_AGE})
    // We are usinf res.cookie method to send cookie to broweser and this is added by cookie parse as a middleware
    res.redirect('/'); // In this case the browser will send user to welcome page(/)
    // Like 'response.send' and 'response.render', we have response.redirect
    // it termintates the response wit ha redirect status code and a location(URL)
    // when the browser receives redirect response it makes the followup request to that provided URL.

});
router.post('/sign_out',(req,res)=>{
    // we use "response.clearCookie" to remove the specific cookie with the cookie-name
    // and in this case we are removing the username from the cookies from the browser.
    res.clearCookie('username');
    res.redirect('/')
})

module.exports = router;







