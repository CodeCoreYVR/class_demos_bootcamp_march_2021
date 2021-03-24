// This migration is created by following command
// knex migrate:make createPosts
// Syntax:
// knex migrate:make <migrationName>
exports.up = function(knex) {
  return knex.schema.createTable('posts', table =>{
      table.increments('id'); // create an autoincrement coulmn name id('id, SERIAL)
      table.string('title');// title VARCHAR(255)
      table.text('content');// content TEXT
      table.integer('viewCount'); // viewCount Integer
      table.string('tags');
      table.timestamp('createdAt').defaultTo(knex.fn.now()); // creates a column called 'createdAt' with type of timestamp and by default it will have current time
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};


// In Production or When you project is in production never make changes to migration