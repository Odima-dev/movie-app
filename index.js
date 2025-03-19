const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e2e16d960f40808e56f05efcae19e823&page=1'
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=e2e16d960f40808e56f05efcae19e823&query="

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("search")

returnMovies(APILINK)
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results)
        data.results.forEach(element => {
            const div_card = document.createElement('div')
            div_card.setAttribute('class', 'card')

            const div_row = document.createElement('div')
            div_card.setAttribute('class', 'card')

            const div_column = document.createElement('div')
            div_card.setAttribute('class', 'card')

            const image = document.createElement('img')
            div_card.setAttribute('class', 'card')
            div_card.setAttribute('class', 'card')

            const title = document.createElement('h3')
            div_card.setAttribute('class', 'card')
            
            const center = document.createElement('center')

            title.innerHTML = `${element.title}`
            image.src = IMG_PATH + element.poster_path

            center.appendChild(image)
            div_card.appendChild(center)
            div_card.appendChild(title)
            div_column.appendChild(div_card)
            div_row.appendChild(div_column)

            main.appendChild(div_row)
        })
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    main.innerHTML = ''

    const searchItem = search.value

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem)
        search.value = ""
    }
})