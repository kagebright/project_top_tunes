const apiKey = "AIzaSyDyBN4PZvhznxRfK4dKAvNGFHMFS8yuaq4";

const videosEL = document.getElementById("videos");

async function youtubeApi(searchArtist) {
  
    try {
    const queryURL = `https://www.googleapis.com/youtube/v3/search?q=${searchArtist}&key=${apiKey}`;
    const response = await fetch(queryURL);
    const data = await response.json();
    const videoId = data.items[0].id.videoId;
    const videoQueryURL = `https://www.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=${apiKey}`;
    const videoResponse = await fetch(videoQueryURL);
    const videoData = await videoResponse.json();
    videosEL.innerHTML = videoData.items[0].player.embedHtml;
      
  } catch (error) {
    console.error(error);
  }
}

