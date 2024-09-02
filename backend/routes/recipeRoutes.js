const express = require('express');
const { getAllRecipes, getRecipe } = require('../controllers/recipeController');
const { validateRecipe } = require('../middlewares/inputValidation');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { upload, resizeImage } = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.post('/', authenticateToken, validateRecipe, upload.single('image'), resizeImage, (req, res) => {
    res.json({ message: 'Recipe created successfully' });
});

module.exports = router;
