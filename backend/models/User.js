// Fetch a user by their ID
async function getUserById(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

// Update user information by ID
async function updateUserById(id, { username, email }) {
    await pool.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
}

// Delete a user by ID
async function deleteUserById(id) {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    updateUserById,
    deleteUserById,
};