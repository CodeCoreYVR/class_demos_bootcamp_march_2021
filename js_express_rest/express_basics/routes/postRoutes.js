const express=require('express');
const knex=require('../db/client');


const router=express.Router();
// INDEX PAGE

// localhost:3000/posts/
router.get('/',(req,res)=>{
    knex("posts")
    .orderBy('createAt',"desc")
    .then(posts=>{
        // console.log(posts);
        res.render('posts/index', {posts: posts})
    })
});
// NEW - CREATE
// localhost:300/posts/new
router.get('/new',(req,res)=>{
    res.render('posts/new')
})

// CREATE
// METHOD: POST URL:'/'
router.post('/',(req,res)=>{
    const formData= req.body;
    knex('posts')
    .insert({
        title:formData.title,
        content:formData.content,
        imageUrl:formData.imageUrl
    })
    .returning('*')
    .then(posts=>{
        // This is called "destructuring" the array
        const [post]=posts

        res.redirect(`/posts/${post.id}`);

    }) 
})

// SHOW 
// localhost:300/posts/:id 👈🏻URL Params

router.get('/:id',(req,res)=>{
    // In URL above, all the words with ':' are ca;;ed URL params. you can view the values of URL params with "req.params" object property.
    //  req.params is an object with key value paire created by pattern-matching against variable named in the url/path
    //  route /posts/:id/:name/:job then the actual route will be /posts/100/bob/developer
    // req.params==={id:100, name:"bob", job:'developer'}

    const id = req.params.id;
    knex("posts")
        .where('id', id)
        .first()
        .then( (post) =>{
        if(post){
            res.render('posts/show', {post:post})
        }else{
            res.redirect('/posts')
        }
        })
});

// DELETE
// METHOD-OVERRIDE
router.delete('/:id', (req,res)=>{
    knex("posts")
    .where('id', req.params.id)
    .del()
    .then(()=>{
        res.redirect('/posts');
    })
})
// localhost:3000/posts/:id/edit
// PATCH / UPDATE
router.get('/:id/edit',(req,res)=>{
    knex('posts')
    .where('id', req.params.id)
    .first()
    .then((post=>{
        res.render('posts/edit', {post:post});
    }))
} )
router.patch('/:id', (req,res)=>{
    const updatePost={
        title: req.body.title,
        content: req.body.content,
        imageUrl:req.body.imageUrl
    };
    knex('posts')
    .where('id', req.params.id)
    .update(updatePost)
    .then(()=>{
        res.redirect(`/posts/${req.params.id}`)
    })

})









module.exports=router;


