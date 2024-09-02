import React from 'react';

function RecipeDetail({ recipe }) {
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeDetail;
