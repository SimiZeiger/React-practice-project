import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import RecipeTitle from "./components/RecipeTitle";
import Ingredients from "./components/Ingredients";
import Directions from "./components/Directions";


const App= () => {
    return(
        <article>
            <h1>Recipe:</h1>
            <RecipeTitle />
            <Ingredients />
            <Directions />
        </article>
    )
}
export default App;