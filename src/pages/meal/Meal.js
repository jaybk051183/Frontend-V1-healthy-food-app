import React, {useState} from "react";
import MealList from "../../components/meallist/MealList";
import './Meal.css';
import axios from 'axios';

function Meal() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(0);

    function handleChange(e) {
        setCalories(e.target.value);
        console.log(e);
    }

    async function getMealData(){
        try{
            const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=078f9200662d4e819dc26b9c312f6156&timeFrame=day&targetCalories=${calories}`);
            setMealData(response.data);
        }
        catch (e) {
            console.error(e)
        }
    }
    getMealData();

    return (
        <div className="meal-plan">
            <h1>Maaltijplanner</h1>
            <section className="controls">
                <input
                    type="number"
                    placeholder="calorieën (bijv. 2000)"
                    onChange={handleChange}
                    className="meal-input"
                />
                <button onClick={getMealData} className="meal-button">Haal je dagelijkse maaltijplan</button>
            </section>
            {mealData && <MealList mealData={mealData} />}
            <footer>
                <div className="footer-container">
                    <p>copyright &copy;2022 NOVI, designed by Kailash</p>
                </div>
            </footer>
        </div>
    );
}

export default Meal;




































































