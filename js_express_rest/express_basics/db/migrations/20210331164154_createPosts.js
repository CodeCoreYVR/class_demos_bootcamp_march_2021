// knex migrate:make createPosts
exports.up = function(knex) {
  return knex.schema.createTable("posts",t=>{
      t.increments('id');
      t.string('ttile');
      t.text('content');
      t.integer('viewCount');
      t.string('tags');
      t.string('imageUrl');
      t.timestamp('createAt').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
};
