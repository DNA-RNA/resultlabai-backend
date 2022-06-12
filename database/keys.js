const {Pool} =require('pg') ;

const pool = new Pool({
    host: '18.198.2.107',
    port: '5432',
    user: 'postgres',
    password: 'resultlabai01',
    database: 'postgres'
});

module.exports = pool;


// const pool = new Pool({
//     host: '18.198.2.107',
//     port: '5432',
//     user: 'postgres',
//     password: 'resultlabai01',
//     database: 'postgres'
// });