import React, {useState} from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import RecipeCard from "../../components/recipecard/RecipeCard"
import AlertMessage from "../../components/alertmessage/AlertMessage"
import './Recipe.css';

function Recipe() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "b04454ec";
    const APP_KEY = "e03c1ff77a588dc048a805ab3d6f4239";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    async function getData(){
        if (query !== "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                return setAlert("Geen recept met opgegeven naam");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
            setAlert("");
        } else {
            setAlert("Voer aub iets in");
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };

    return (
        <div className="App">
            <h1>Recepten zoeker</h1>
            <form onSubmit={onSubmit} className="search-form">
                {alert !== "" && <AlertMessage alert={alert} />}
                <input
                    type="text"
                    name="query"
                    onChange={(e)=>setQuery(e.target.value)}
                    value={query}
                    placeholder="Zoek recepten"
                /><br/>
                <input type="submit" value="Zoeken" />
            </form>
            <div className="recipes">
                {recipes !== [] &&
                    recipes.map(recipe => <RecipeCard key={uuidv4()} recipe={recipe} />)}
            </div>
            <footer>
                <div className="footer-container">
                    <p>copyright &copy;2022 NOVI, designed by Kailash</p>
                </div>
            </footer>
        </div>
    );
}

export default Recipe;
