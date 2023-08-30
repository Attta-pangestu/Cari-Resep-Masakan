import RecipeItem from "./recipe-item";

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
        this.shadowDOM.innerHTML = `
            <div class="list-recipe">
            
            </div>
        
        ` ;
        // 
        // Perulangan data recipes 
        this._recipes.foreach(recipe => {
            const recipeItem = document.createElement('recipe-item') ; 
            recipeItem.setRecipe = recipe ; 
            this.append(recipeItem) ;
        });
    }
    
}


customElements.define('recipe-list', RecipeList) ; 

export default RecipeList ; 