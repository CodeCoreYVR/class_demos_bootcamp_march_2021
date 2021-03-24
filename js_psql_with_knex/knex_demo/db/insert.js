const knex=require('./client');

const query1=knex
                .insert({title : 'My First Post'})
                .into('posts')
                .returning('*')
                // .then(
                //     results => {
                //         console.log(results);
                //         knex.destroy(); // This closes the connection to the database 
                //         }
                //     );
// console.log(query1.toString());

// query1.then(
//     results => {
//         console.log(results);
//         knex.destroy(); // This closes the connection to the database 
//         }
//     );


const query2 = knex
.insert([
    {title: 'Top 5 Schools', content:'Hogwarts, cordcore, etc'},
    {title: 'Top 3 rocks', content:'Diamond, ruby, amethyst'},
    {title: 'Top 3 Programming Languaged', content:'JS, ruby, PHP'},
])
.into('posts')
.returning('*')

console.log(query2.toString());
query2.then(results=>{
    console.log(results);
    knex.destroy();
})