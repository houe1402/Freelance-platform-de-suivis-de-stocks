const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'stockdb',
    password: 'password',
    port: 5432,
});

module.exports = { Pool: pool };
