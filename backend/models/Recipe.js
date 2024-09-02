const pool = require('../config/db');

async function getRecipes() {
    const [rows] = await pool.query('SELECT * FROM recipes');
    return rows;
}

async function getRecipeById(id) {
    const [rows] = await pool.query('SELECT * FROM recipes WHERE id = ?', [id]);
    return rows[0];
}

module.exports = {
    getRecipes,
    getRecipeById,
};
