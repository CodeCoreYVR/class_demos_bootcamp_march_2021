const faker = require('faker');
// To generate this file we used following commnad (to generate seed file)
// knex seed:make generatePosts

// to run seed we use following command:
// knex seed:run
exports.seed = function(knex) {
  // Deletes ALL existing entries

  return knex('posts')
  .del() // DELETE FROM "posts"
    .then(function () {
      const posts=Array.from({length: 1000}).map(
        ()=>{
          return {
            title:faker.company.catchPhrase(),
            content:faker.lorem.paragraph(),
            imageUrl:faker.image.imageUrl(),
            viewCount: faker.random.number(100),
            createdAt:faker.date.past()
          }
        }
      )
      // Inserts seed entries
      return knex('posts').insert(posts);
    });
};



