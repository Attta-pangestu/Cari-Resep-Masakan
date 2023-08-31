class RecipeItem extends HTMLElement {
    constructor() {
        super() ; 
        this.shadowDOM = this.attachShadow({mode: 'open'}) ; 
    }

   set setRecipe(recipe) {
    this._recipe = recipe ; 
    this.render() ; 
    
   }

    render() {
        console.log(this._recipe) ; 
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 1.6rem;
                    margin-bottom: 1.6rem;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
                    border-radius: 1rem;
                }

                .recipe-info {
                    padding: 1rem;
                }

                img {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }

                .recipe-info > h2 , .recipe-info > h3 {
                    text-transform: uppercase;
                    margin-top: 1rem;
                    text-align: center;
                    border-bottom: 2px solid #5a5a5a;
                }
            </style>
        
        `;
        // Render Data Recipe ke Element HTML
        this.shadowDOM.innerHTML += `
        <div class="recipe-item">
        <div class="recipe-info">
            <img src="${this._recipe.strMealThumb}" >
            <h2>${this._recipe.strMeal}</h2>
            <h3>This is ${this._recipe.strArea} ${this._recipe.strCategory}</h3>
            <br>
            <br>
            <strong>Dish Category : ${this._recipe.strCategory}</strong>
            <br>
            <br>
            <strong>How To Make : </strong>
            <p>
            ${this._recipe.strInstructions}
            </p>
        </div>
    </div>
        `;
    }
}

customElements.define('recipe-item',RecipeItem) ;

export default RecipeItem ; 