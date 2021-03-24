const knex = require("./client");    

// const query1=knex('posts')
// .where('id',100)
// .update({
//     title: 'So many views',
//     viewCount:10000
// });


const query1= knex('posts')
        .where("id", "<=", "100")
        .update({
            title:'sparkeld'
        })


console.log(query1.toString());

query1.then((data=>{
    console.log(data);
    knex.destroy();
}))