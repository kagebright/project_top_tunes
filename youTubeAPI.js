const apiKey= "AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY"

function youtubeApi() {
    const queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&videoDuration=any&videoType=any&key=AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY"
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function(data) {
    console.log(data)
        })

}

youtubeApi()
  /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyCvwFXwykEYMZpivD7c0pXm2KjCi1srHwY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "channelType": "any",
      "forContentOwner": false,
      "forDeveloper": false,
      "forMine": false,
      "videoDuration": "any",
      "videoType": "any"
    })
        .then(function(response) {
                
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
//</script>
//<button onclick="authenticate().then(loadClient)">authorize and load</button>
//<button onclick="execute()">execute</button>

document.querySelector('.searchButton').addEventListener('click',
    function() {
        authenticate().then(loadClient);
    }
);