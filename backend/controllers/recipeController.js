const Recipe = require('../models/Recipe');

async function getAllRecipes(req, res) {
    const recipes = await Recipe.getRecipes();
    res.json(recipes);
}

async function getRecipe(req, res) {
    const recipe = await Recipe.getRecipeById(req.params.id);
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
}

module.exports = { getAllRecipes, getRecipe };
