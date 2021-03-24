// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_demo',
      // Only for linux user
      // user: 'username',
      // password: 'password'
    },
    migrations:{
      tableName:'migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
