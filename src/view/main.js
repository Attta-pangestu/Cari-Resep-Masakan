import DataSource from '../data/dataSource.js' ; 

function main () {
    // definisi elemen DOM 
    const searchElement = document.getElementById('search-val-hero') ; 
    const searchBtn = document.getElementById('search-btn-hero') ; 

    // Event ketika tombol cari resep diklik 
    searchBtn.addEventListener('click', () => {
        const keyword = searchElement.value ; 
        // Memanggil fungsi getData, mengembalikan nilai array
        const dataRecipe =  dataSource.getData(keyword) ; 
        // Memanggil fungsi render
        console.log(dataRecipe);
        // if (dataRecipe) {
            
        // }
    });

}

export default main  ; 