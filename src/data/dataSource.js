class DataSource {
    static getData(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`) 
            .then( response => {return response.json()})
            .then(responseJSON => {
                if(responseJSON.meals) {
                    return Promise.resolve(responseJSON.meals) ; 
                }
                else {
                    return Promise.reject(`${keyword} tidak ditemukan`) ; 
                }
            })
        ;
    }
}

export default DataSource ; 