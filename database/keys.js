const {Pool} =require('pg') ;

const pool = new Pool({
    host: '18.198.2.107',
    port: '5432',
    user: 'postgres',
    password: '******',
    database: 'postgres'
});

module.exports = pool;


