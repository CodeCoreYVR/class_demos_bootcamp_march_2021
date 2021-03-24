const knex = require("./client");    

const query1=knex('posts')
.where('id',90)
.del()

console.log(query1.toString());

query1.then((data=>{
    console.log(data);
    knex.destroy();
}))