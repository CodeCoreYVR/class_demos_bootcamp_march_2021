const knex = require("./client");   

// const query1=knex.select("*").from("posts");
// Select with column Names
// const query1=knex.select("id","title").from("posts");
// Select with where clause
// const query1=knex
//     .select("*")
//     .from("posts")
//     .where("title", "ilike", "%ee%")
//     .limit(5)
//     .offset(10);

// whereRaw
// const query1=knex
//     .select("*")
//     .from("posts")
//     .whereRaw('title ilike ? and content ilike ?', ["%w%", "%t%"])

// Aggregate Function

// const query1=knex
//             .count({postCount: '*'})
//             .avg({avaragViews: "viewCount"})
//             .max('viewCount as highestViewcount')
//             .from("posts")


// Exercise 1:

// const query1=knex
//     .select("*")
//     .from("posts")
//     .whereRaw(`"createdAt" > now() - interval '60 days'`)


console.log(query1.toString());

query1.then((data=>{
    console.log(data);
    knex.destroy();
}))

//  For writing Raw Queries
// const query1= knex.raw('SELECT * from posts');

// console.log(query1.toString());

// query1.then((data=>{
//     console.log(data.rows);
//     knex.destroy();
// }))