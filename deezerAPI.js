
const searchButton = $('.searchButton')
let artist;





function getApi() {
    const queryURL = 'https://api.deezer.com/artist/' + artist
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            getTopSongs(data.id)
            console.log(data)
        })

}

function getTopSongs(id) {
    const topSongApi = 'https://api.deezer.com/artist/' + id + '/top'
    fetch(topSongApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
}

function renderTopSongs() {
    const songNameEl = $('#savedSearches')
    const artistNameEl = $(`.savedSearches`)
    const albumNameEL = $(`.savedSearches`)

    songNameEl.text('put the name of the songs here')
    songNameEl.append(songNameEl)


}

// renderTopSongs()

searchButton.click(function () {
    artist = $('.userInput').val()
    console.log(artist)
    getApi()
})
