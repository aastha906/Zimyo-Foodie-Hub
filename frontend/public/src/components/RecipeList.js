import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({ recipes }) {
    return (
        <ul>
            {recipes.map(recipe => (
                <li key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default RecipeList;
