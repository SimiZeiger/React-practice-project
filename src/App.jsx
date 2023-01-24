import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import RecipeTitle from "./components/RecipeTitle";
import Ingredients from "./components/Ingredients";
import Directions from "./components/Directions";


const App= () => {
    return(
        <div class="position-relative">
            
            <RecipeTitle />
            <Ingredients />
            <Directions />
            
        </div>
    )
}
export default App;