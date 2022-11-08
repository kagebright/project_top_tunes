const apiKey= "AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY"

function youtubeApi() {
    const queryURL = "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY"
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
    console.log(data)
        })

}

youtubeApi()
