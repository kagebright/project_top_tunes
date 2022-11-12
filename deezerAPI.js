
const searchButton = $('.searchButton')
let artist;
// const songNameEL = document.getElementById('songTitle')
// const albumPic = document.getElementById('albumCover')
// const artistName = document.getElementById('artistName')
// const albumNameEL = document.getElementById('albumName')
// const albumPicUrl = img[`src`]
const nextButton = document.createElement(`button`)
const searchResults = document.getElementById(`searchResults`)
const bigSearchButton = $('#bigSearchButton')
const discContainer = document.querySelector('.discContainer')
const artistName = document.createElement(`p`)




function getApi() {
    const queryURL = 'https://api.deezer.com/artist/' + artist
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            getTopSongs(data.id)
            // console.log(data)
        })

}

function getTopSongs(id) {
    const topSongApi = 'https://api.deezer.com/artist/' + id + '/top'
    fetch(topSongApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            artistName.textContent = `Artist Name: ` + data.data[0].artist.name
            discContainer.appendChild(artistName)
            const saveButton = document.createElement(`button`)
            for (let i = 0; i < 5; i++) {
                const songNameEL = document.createElement(`h1`)
                const albumNameEL = document.createElement(`p`)

                songNameEL.textContent = `Song Title: ` + data.data[i].title

                albumNameEL.textContent = `Album Name: ` + data.data[i].album.title

                discContainer.appendChild(songNameEL)
                discContainer.appendChild(albumNameEL)
                discContainer.append(saveButton)
            }
            saveButton.textContent = `save list!`
            // albumPicUrl.textContent = data.data[0].album.cover_medium
            // nextButton.textContent = 'Get 5 more songs!'
            // nextButton.append(songNameEL)
            // albumPic.innerHTML = img[`src`]
            console.log(data.data[0].album.cover_medium)
            console.log(data.data[0])
        })
}



bigSearchButton.click(function () {
    artist = $('.user-Input').val().trim().replace(/\s+/g, '-')
    console.log(artist)
    youtubeApi(artist)
    getApi()
    console.log('hello')


    console.log(youtubeApi)
})

