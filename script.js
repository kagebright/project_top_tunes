fetch(apiUrl).then(function (response) {
    if (response.ok) {
        response.json()
        .then(function (data) {
            displayIssues(data);

            if (response.headers.get('Link')) {
                displayWarning(repo)
            }
        });
    } else {
        document.location.replace('./indem.html');
    }
});


const searchButton = $('.searchButton')
let artist;


searchButton.click(function () {
    artist = $('.userInput').val()
    console.log(artist)

})