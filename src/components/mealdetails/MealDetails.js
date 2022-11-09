import React, { useState, useEffect } from "react";
import axios from 'axios';

function MealDetails({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(()=>{
        async function fetchData() {
            try{
                const { data } = await axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=078f9200662d4e819dc26b9c312f6156&includeNutrition=false`);
                setImageUrl(data.image);
            }
            catch (e) {
                console.error(e)
            }
        }
        fetchData();
    },[meal.id])

    return (
        <article>
            <h2>{meal.title}</h2>
            <img src={imageUrl} alt="recipe" />
            <ul className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl}>Go to Recipe</a>
        </article>
    );
}

export default MealDetails;
