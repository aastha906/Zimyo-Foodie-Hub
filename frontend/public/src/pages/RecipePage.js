import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`/api/recipes/${id}`)
            .then(response => response.json())
            .then(data => setRecipe(data))
            .catch(error => console.error('Error fetching recipe:', error));
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

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

export default RecipePage;
