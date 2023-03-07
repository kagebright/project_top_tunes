// const apiKey= "AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY"
// const videosEl= document.getElementById("videos");
const apiKey= "AIzaSyDyBN4PZvhznxRfK4dKAvNGFHMFS8yuaq4"
const videosEL= document.getElementById("videos");


// "AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY"

function youtubeApi(searchArtist) {
    const apiKey = "AIzaSyDyBN4PZvhznxRfK4dKAvNGFHMFS8yuaq4"
    const queryURL = "https://www.googleapis.com/youtube/v3/search?q=" + searchArtist + "&key="+ apiKey;
    
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
          console.log(data)
        const videoId = data.items[0].id.videoId;
        const queryURL = "https://www.googleapis.com/youtube/v3/videos?part=player&id=" + videoId + "&key=" + apiKey;
        
        fetch(queryURL)
        .then(function (response) {
            return response.json();
          })
        
          .then(function (data) {
            console.log(data)
            videosEL.innerHTML = data.items[0].player.embedHtml;
          
          });
        });
}

