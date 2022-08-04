/*document.addEventListener('DOMContentLoaded', function(event) {
    //the event occurred
  })*/
  console.log(movies) // Ceck the Data

const ul = document.querySelector("#for-list") // Declear Ul

// Point 11 
const removeMoviesFromDom = () => {
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild)
    }
}    

const addMoviesToDom = (movies) => { // Function
    removeMoviesFromDom()
   // movies.map(movie => {
    const moviesBackToList = movies.map(movie => {
        let list = document.createElement("li")  // Put into a varible
        let link = document.createElement("a")
        let img = document.createElement("img")
        list.innerHTML = movie.title  // For Show the all Title
        
        img.src = movie.poster
        // Point 12 
        
            link.href = "https://www.imdb.com/title/" + movie.imdbID;
            link.target = "_blank";
            
            ul.appendChild(list)
            list.appendChild(link)
            link.appendChild(img)
            return list
    })
    return moviesBackToList
}
addMoviesToDom(movies)  // Call back

// Point 7 Filter every Movie
const filterMovies = (wordInMovie) => {
    removeMoviesFromDom()
    return movies.filter(movie => {
        return movie.title.includes(wordInMovie)
    })
}
//console.log(filterMovies("Princess"))
//console.log(filterMovies('Batman'))

    // Point 10 Last Movies
function filterLatestMovies() {
    removeMoviesFromDom()
    return movies.filter(movie => {
        return movie.year >= 2014
    })
}
 // Click and Change Event
const handleOnChangeEvent = (event) => {
    console.log(event.target.value)
    switch(event.target.value) {
        case "all-movie":
            addMoviesToDom(filterLatestMovies())
            break;
        case "avenger":
            addMoviesToDom(filterMovies("Avenger"))
            break;
        case "x-men":
            addMoviesToDom(filterMovies("X-Men"))
            break;
        case "princess":
            addMoviesToDom(filterMovies("Princess"))
            break;
        case "batman":
            addMoviesToDom(filterMovies("Batman"))
            break;
    }
}
  // Event Clicks 
const radioButton = document.getElementsByName("film-filter") // Radio Type for all movies
radioButton.forEach(radioButton => {
    radioButton.addEventListener("change", handleOnChangeEvent)
})
    // Search Bar
const bar = document.getElementById("search")
const barInput = bar.addEventListener('keyup', (event) => {
    removeMoviesFromDom()

const theSearch = event.target.value.toLowerCase();
const barMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(theSearch)
})
//console.log(bar)
//console.log(barInput)
addMoviesToDom(barMovies)
//console.log(barMovies)
})
  /* Other Way for Event Clicks 
  const radioButton = document.getElementsByName("film-filter") // Radio Type for all movies
  radioButton.forEach(radioButton => {
      radioButton.addEventListener("change", handleOnChangeEvent => { // there will be an event when the circle of the radio button is checked or unchecked
          if (document.getElementById("all-movie").checked == true) {  // Check Button for all movie
              allMovie = movies.filter((movies) =>
              movies.year > "2014").map((movies) => movies)
              console.log('radioButton') // Check
              addMoviesToDom(allMovie)
          }
          if (document.getElementById("avenger").checked == true) {   // Check Button for all avengers
              console.log('avenger')  // Check
              avenger = movies.filter((movies) =>
              movies.title.includes("Avengers")).map((movies) => movies)
          }
          if (document.getElementById("x-men").checked == true) {    // Check Button for x-men
              alert("X-Men 22")
          }
          if (document.getElementById("princess").checked == true) {  // Check Button for princess
              alert("Princess 22")
          }
          if (document.getElementById("batman").checked == true) {    // Check Button for Batman
              alert("Batman 22")
          }
      })
  })*/