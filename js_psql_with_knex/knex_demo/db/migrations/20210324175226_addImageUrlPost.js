
exports.up = function(knex) {
  return knex.schema.table('posts', table=>{
    //   Alter table 'posts'
      table.string('imageUrl'); // ADD column 'imageUrl' VARCHAR(255)
  })
};

exports.down = function(knex) {
    return knex.schema.table('posts', table=>{
        table.dropColumn('imageUrl'); // DROP Colum "imageUrl"
    })
  
};
