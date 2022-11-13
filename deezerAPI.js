
const searchButton = $('.searchButton')
let artist;
const nextButton = document.createElement(`button`)
const searchResults = document.getElementById(`searchResults`)
const bigSearchButton = $('#bigSearchButton')
const discContainer = document.querySelector('.discContainer')
const artistName = document.createElement(`p`)
const savedSearchEl = document.getElementById(`saveArtistSearch`)



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

            const savedArray = [];
            const saveArtist = {
                artistName: data.data[0].artist.name,
                songs: [],
            }
            for (let i = 0; i < 5; i++) {
                const songLink = document.createElement(`a`)
                const songNameEL = document.createElement(`h1`)
                const albumNameEL = document.createElement(`p`)
                songNameEL.textContent = `Song Title: ` + data.data[i].title
                songLink.setAttribute = `href` + data.data[i].link
                albumNameEL.textContent = `Album Name: ` + data.data[i].album.title
                const savedObj = {
                    songTitle: data.data[i].title,
                    albumName: data.data[i].album.title,

                }
                saveArtist.songs.push(savedObj)
                discContainer.appendChild(songNameEL)
                discContainer.appendChild(albumNameEL)
                // discContainer.append(saveButton)
                discContainer.append(songLink)
            }
            savedArray.push(saveArtist)
            checkForArtist(savedArray)
        })
}



function checkForArtist(savedArray) {
    const hasSavedArray = JSON.parse(localStorage.getItem(`savedSearches`)) || [];

    if (!hasSavedArray.length) {
        console.log(hasSavedArray.length, `this is the IF`)

        localStorage.setItem(`savedSearches`, JSON.stringify(savedArray))
    } else {
        console.log(hasSavedArray, `this is in the else`)
        const found = hasSavedArray.find(obj => {
            if (obj.artistName == savedArray[0].artistName) {
                console.log('found')
                return true

            } else {
                return false
            }
        })
        console.log(found, `after the else`)
        if (!found) {
            hasSavedArray.push(savedArray[0])
            localStorage.setItem(`savedSearches`, JSON.stringify(hasSavedArray))
        }
    }
}

function fillSavedSearches() {
    const hasSavedArray = JSON.parse(localStorage.getItem(`savedSearches`)) || [];
    for (let i = 0; i < hasSavedArray.length; i++) {
        const savedArtistName = document.createElement(`p`)
        savedArtistName.textContent = `Artist Name: ${hasSavedArray[i].artistName}`
        savedSearchEl.append(savedArtistName)
        for (let j = 0; j < hasSavedArray[i].songs.length; j++) {
            const savedSongNameEl = document.createElement(`h1`)
            const savedAlbumNameEL = document.createElement(`p`)
            savedSongNameEl.textContent = `Song Title: ${hasSavedArray[i].songs[j].songTitle}`
            savedAlbumNameEL.textContent = `Album Name: ${hasSavedArray[i].songs[j].albumName}`
            savedSearchEl.append(savedSongNameEl)
            savedSearchEl.append(savedAlbumNameEL)
        }

    }
}

bigSearchButton.click(function () {
    artist = $('.user-Input').val().trim().replace(/\s+/g, '-')
    discContainer.textContent = ``
    // console.log(artist)
    youtubeApi(artist)
    getApi()
    // console.log('hello')


    // console.log(youtubeApi)
})

fillSavedSearches()
