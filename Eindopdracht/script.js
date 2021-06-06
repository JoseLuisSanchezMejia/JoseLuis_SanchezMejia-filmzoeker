//import data 
import{movies} from "./movies.js";
let moviesCopy=movies;
let moviesFilter=movies;

//aftrapfunctie om een selectie van films naar de DOM te sturen:
const getUl=document.querySelector("#masterLijst");
function addMoviesToDom(moviesFilter){
    getUl.innerText=""; 
    const linkIds= moviesFilter.map((item)=>{
        return{Poster: item.Poster, imdbID: item.imdbID}
    })

    linkIds.forEach((item)=>{
        const links=document.createElement("a");
        const bullitP=document.createElement("img");
        links.setAttribute("href", "https://www.imdb.com/title/"+item.imdbID);
        links.setAttribute("target","_blank");
        getUl.appendChild(links);
        bullitP.setAttribute("src",item.Poster);
        bullitP.setAttribute("width","200");
        bullitP.setAttribute("height","300");
        links.appendChild(bullitP);
    })
}
addMoviesToDom(moviesFilter);

let wordInMovieTitle=""
function filterMovies(wordInMovieTitle){
    moviesFilter= moviesCopy
    .map((item)=>{return {Title: item.Title, Poster: item.Poster, Year: item.Year, imdbID: item.imdbID}})
    .filter((item)=>{
        if (item.Title.includes(wordInMovieTitle)===true){
            return item;
        };
    })
}

function filterLatestMovies(){
    moviesFilter=moviesCopy
    .map((item)=>{return {Title: item.Title, Poster: item.Poster, Year: item.Year, imdbID: item.imdbID}})
    .filter((item)=>{
        if (item.Year >=2014){
            return item;
        };
    })
}

const radioButtons=document.querySelectorAll(".rButtons");
radioButtons.forEach((item)=>{
    item.addEventListener("change", handleOnChangeEvent)
    function handleOnChangeEvent(event){
        let selection= event.target;
        switch(selection.id){
            case "filter0":
                moviesFilter=movies;
                addMoviesToDom(moviesFilter);  
            break;
            case "filter1":
                filterLatestMovies();
                addMoviesToDom(moviesFilter);  
            break;
            case "filter2":
                wordInMovieTitle="Avengers"
                filterMovies(wordInMovieTitle);
                addMoviesToDom(moviesFilter);       
            break;
            case "filter3":
                wordInMovieTitle="X-Men"
                filterMovies(wordInMovieTitle);
                addMoviesToDom(moviesFilter);
            break;
            case "filter4":
                wordInMovieTitle="Princess"
                filterMovies(wordInMovieTitle);
                addMoviesToDom(moviesFilter);
            
            break;
            case "filter5":
                wordInMovieTitle="Batman"
                filterMovies(wordInMovieTitle);
                addMoviesToDom(moviesFilter);
            break;
            default: 
                let textInput=zoek.value;
                let input;
                    if (textInput.indexOf("-")!==-1){
                        input=textInput[1+textInput.indexOf("-")].toUpperCase()+textInput.substr(2+textInput.indexOf("-"));
                    }
                    else {
                        input=textInput[0].toUpperCase()+textInput.substr(1);
                    };
                wordInMovieTitle=input;
                filterMovies(wordInMovieTitle);
                addMoviesToDom(moviesFilter);
        }   
    }

})

