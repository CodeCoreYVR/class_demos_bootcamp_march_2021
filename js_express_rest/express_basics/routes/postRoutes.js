const express=require('express');
const knex=require('../db/client');


const router=express.Router();

// localhost:3000/posts/
router.get('/',(req,res)=>{
    knex("posts")
    .orderBy('createAt',"desc")
    .then(posts=>{
        console.log(posts);
    })
});









module.exports=router;
