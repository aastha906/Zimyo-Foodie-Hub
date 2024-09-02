import React, { useState, useEffect } from 'react';

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/api/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
