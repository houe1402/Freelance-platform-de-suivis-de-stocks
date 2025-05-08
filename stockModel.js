const { Pool } = require('../config/db');

const Stock = {
    getAll: async () => {
        const result = await Pool.query('SELECT * FROM stocks');
        return result.rows;
    },
    add: async (name, quantity) => {
        const result = await Pool.query(
            'INSERT INTO stocks (name, quantity) VALUES ($1, $2) RETURNING *',
            [name, quantity]
        );
        return result.rows[0];
    },
    delete: async (id) => {
        await Pool.query('DELETE FROM stocks WHERE id = $1', [id]);
    },
};

module.exports = Stock;
