class DataSource {
    static searchMovie(keyword) {
        return fetch (`https://api.themoviedb.org/3/search/movie?api_key=e90bba1a0e676ad79ecd5bf8d824f59b&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            }else{
                return Promise.reject(`${keyword} is not found`)
            }
        })
    }
}

export default DataSource;