// const environment= process.env.NODE_ENV || 'developement';
// 👆🏻 set the environment
const config=require("../knexfile").development;
// // 👆🏻 load the exported configuration from knexfile
// const enviromentConfig=config[environment];
// // 👆🏻 grab the environment you want to connect;
const knex= require('knex');
// 👆🏻 requiring the kne

const connection=knex(config);
// 👆🏻 pass the enviroment you want to connect, to knex.

module.exports = connection;
// // 👆🏻 exporting the connection
