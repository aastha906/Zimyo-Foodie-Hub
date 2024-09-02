const User = require('../models/User');

// Get user profile by ID
async function getUserProfile(req, res) {
    try {
        const userId = req.user.id;
        const user = await User.getUserById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.created_at,
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Update user profile
async function updateUserProfile(req, res) {
    try {
        const userId = req.user.id;
        const { username, email } = req.body;

        const existingUser = await User.getUserByEmail(email);
        if (existingUser && existingUser.id !== userId) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        await User.updateUserById(userId, { username, email });
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Delete user account
async function deleteUserAccount(req, res) {
    try {
        const userId = req.user.id;
        await User.deleteUserById(userId);
        res.json({ message: 'Account deleted successfully' });
    } catch (error) {
        console.error('Error deleting user account:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUserAccount,
};
