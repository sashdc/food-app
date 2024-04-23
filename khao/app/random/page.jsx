'use client';

import React, { useEffect, useState } from 'react';

export default function Page() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_SPOON_API_KEY;
                const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
                const response = await fetch(url);
                const data = await response.json();
                setRecipe(data.recipes[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {loading ? (
                <p>Loading...</p>
            ) : recipe ? (
                <div>
                    <h1>{recipe.title}</h1>
                    <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
                    <p>Servings: {recipe.servings}</p>
                    <p>Ready in: {recipe.readyInMinutes} minutes</p>
                    <p>
                        Source: <a href={recipe.sourceUrl}>{recipe.sourceName}</a>
                    </p>
                    <p>{recipe.summary}</p>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.extendedIngredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.amount} {ingredient.unit} {ingredient.name}
                            </li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <ol>
                        {recipe.analyzedInstructions[0].steps.map((step, index) => (
                            <li key={index}>{step.step}</li>
                        ))}
                    </ol>
                </div>
            ) : (
                <p>No recipe found.</p>
            )}
        </main>
    );
}
