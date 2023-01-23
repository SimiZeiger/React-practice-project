import React from "react";
import RecipeTitle from "./components/RecipeTitle";


const App= () => {
    return(
        <article>
            <h1>Recipe:</h1>
            <RecipeTitle />
            <ingredients />
            <directions />
        </article>
    )
}
export default App;