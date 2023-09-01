import RecipeItem from "./recipe-item.js";

class RecipeList extends HTMLElement {
    constructor() {
        super() ; 
        this.shadowDOM = this.attachShadow({mode:'open'}) ; 
        
    }
    set setRecipes(recipes) {
        this._recipes = recipes ;
        this.render() ; 
    }
    

    render() {
        
        // clearing inner HTML
        this.shadowDOM.innerHTML = ``;

        this.shadowDOM.innerHTML += `
            <style>

            </style>
        
        ` ; 

        // Perulangan data recipes 
        this._recipes.forEach(recipe => {
            const recipeItem = document.createElement('recipe-item') ; 
            recipeItem.setRecipe = recipe ; 
            console.log(recipe) ;
            this.shadowDOM.appendChild(recipeItem) ;
        });

        
    }
    
}


customElements.define('recipe-list', RecipeList) ; 

export default RecipeList ; 