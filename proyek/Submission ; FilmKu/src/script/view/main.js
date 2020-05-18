import '../component/film-list.js'
import '../component/search.js'
import DataSource from '../data/data-source.js'

const main = () => {
    const searchElement = document.getElementById("kotak_cari");
    const buttonSearchElement = document.querySelector("#tombol_cari")
    const filmListElement = document.querySelector("film-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
            console.log(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        filmListElement.innerHTML = "";
        results.forEach(film => {
            const title = film.title;
            const description = film.overview;
            const date = film.release_date;
            const poster = film.poster_path;
            const adult = film.adult;

            const base_img = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"

            const filmElement = document.createElement("div");
            filmElement.setAttribute("id", "film");
           
            filmElement.innerHTML = `
               
                 <img src="${base_img}${poster}" alt="${title}" class="poster_film" >
                 <a href="#${title}"> 
                     <h2>${title}</h2>
                 </a>
                 <span>${date}</span>
             <div class="overlay" id="${title}">
                 <div class="overlay_card">
                 <img src="${base_img}${poster}" alt="${title}">
                     <h1>${title}</h1>
                     <p>${description}</p>
                     <div class="clear"></div>
                 </div>
                 <a href="#" class="close">X</a>
             </div>
            `;
            filmListElement.appendChild(filmElement);
        });
    };

    const fallbackResult = message => {
        filmListElement.renderError(message);
        filmListElement.innerHTML = "";
        filmListElement.innerHTML += `Gak ono`
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;
{/* <img class="poster" src="${poster}" alt="posterfilm"></img> */}