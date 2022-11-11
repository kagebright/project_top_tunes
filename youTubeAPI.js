const apiKey= "AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY"
const videosEl= document.getElementById("videos");

function youtubeApi(searchArtist) {
    const apiKey = "AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY"
    const queryURL = "https://www.googleapis.com/youtube/v3/search?q=" + searchArtist + "&key="+ apiKey;
    
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
        const videoId = data.items[0].id.videoId;
        const queryURL = "https://www.googleapis.com/youtube/v3/videos?part=player&id=" + videoId + "&key=" + apiKey;
        
        fetch(queryURL)
        .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            videosEl.innerHTML = data.items[0].player.embedHtml;
          });
        });
}

youtubeApi()

document.getElementById("button").addEventListener("click", function() {
    youtubeApi(document.getElementById("input").value);
  });

  searchButton.click(function () {
    artist = $('.userInput').val()
    console.log(artist)
    youtubeApi()
  })