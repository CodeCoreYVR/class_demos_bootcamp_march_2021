const enviroment= process.env.NODE_ENV || 'developement';
// 👆🏻 set the environment
const config=require("../knexfile");
// 👆🏻 load the exported configuration from knexfile
const enviromentConfig=config[enviroment];
// 👆🏻 grab the environment you want to connect;
const knex= require('knex');
// 👆🏻 requiring the kne

const connection=knex(enviromentConfig);
// 👆🏻 pass the enviroment you want to connect, to knex.

module.exports = connection;
// // 👆🏻 exporting the connection
