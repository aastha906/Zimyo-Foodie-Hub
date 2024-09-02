import React, { useState } from 'react';

function RecipeForm({ onSubmit, initialData = {} }) {
    const [title, setTitle] = useState(initialData.title || '');
    const [description, setDescription] = useState(initialData.description || '');
    const [ingredients, setIngredients] = useState(initialData.ingredients || []);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = ingredients.slice();
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, ingredients });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Ingredients</label>
                {ingredients.map((ingredient, index) => (
                    <input
                        key={index}
                        type="text"
                        value={ingredient}
                        onChange={(e) => handleIngredientChange(index, e.target.value)}
                        required
                    />
                ))}
                <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default RecipeForm;
