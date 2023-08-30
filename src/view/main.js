import DataSource from '../data/dataSource.js' ; 


function main () {
    // Instancesiation 
    const heroSearch = document.querySelector('hero-search') ;  
    

    // Event ketika tombol cari resep diklik 
   const heroBtnClick = async  () => {
        try {
            const keyword = heroSearch.value ;
            // console.log(keyword) ;  
            // Memanggil fungsi getData, mengembalikan nilai array
            const dataRecipe = await DataSource.getData(keyword) ; 
            // Memanggil fungsi render
            if (dataRecipe) {
               console.log(dataRecipe) ; 
            }
        }
        catch(error) {
        }
    };

    heroSearch.btnClick = heroBtnClick ; 
}


export default main  ; 