// Import Komponen
import AppHeader from '../component/app-header.js';
import HeroSearch from '../component/hero-search.js';
import RecipeList from '../component/recipe-list.js';
import AppFooter from '../component/app-footer.js';

import DataSource from '../data/dataSource.js' ; 

function main () {
    // Koordinat DOM
    const mainElement = document.querySelector('main') ; 
    // Instancesiation 
    const heroSearch = document.querySelector('hero-search') ;  
    const appHeader = document.querySelector('app-header') ; 

    // Event ketika tombol cari resep diklik 
   const heroBtnClick = async  () => {
        try {
            const keyword = heroSearch.value || appHeader.value  ;
            // console.log(keyword) ;  
            // Memanggil fungsi getData, mengembalikan nilai array
            const dataRecipe = await DataSource.getData(keyword) ; 
            // Memanggil fungsi render
            if (dataRecipe) {
            //    Instance kelas recipe-list
                const recipeList = document.createElement('recipe-list') ; 
                recipeList.setRecipes = dataRecipe ;
                mainElement.insertAdjacentElement('afterend', recipeList) ; 
            }
        }
        catch(error) {
            alert(error) ; 
        }
    };
    // Mendefinisikan event handler ke component 
    heroSearch.btnClick = heroBtnClick ; 
    appHeader.btnClick = heroBtnClick ; 
}


export default main  ; 