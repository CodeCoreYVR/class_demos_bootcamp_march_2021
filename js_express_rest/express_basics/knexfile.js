// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:'express-rest-articles'
      // for Linux 👇🏻 - incoment and use
      // username: "your postges username",
      // password: "password"
    },
    migrations:{
      tableName:'migrations',
      directory:"./db/migrations"
    },
    seeds:{
      directory:"./db/seeds"
    }
  }
};
