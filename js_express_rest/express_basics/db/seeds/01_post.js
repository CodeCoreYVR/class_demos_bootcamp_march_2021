const faker=require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function () {
      const posts= Array.from({length:1000}).map(()=>{
        return {
          title: faker.company.catchPhrase(),
          content: faker.lorem.paragraph(),
          imageUrl:faker.image.imageUrl(),
          viewCount:faker.datatype.number(100),
          createAt:faker.date.past()
        }
      })
      // Inserts seed entries
      return knex('posts').insert(posts);
    });
};
