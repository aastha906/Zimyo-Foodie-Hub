const express = require('express');
const { getUserProfile, updateUserProfile, deleteUserAccount } = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', authenticateToken, getUserProfile);
router.put('/profile', authenticateToken, updateUserProfile);
router.delete('/account', authenticateToken, deleteUserAccount);

module.exports = router;
