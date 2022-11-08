
apiKey = '26d4420ef3aa930b6e352d4c85438241'


function getApi() {
    const queryURL = 'https://api.musixmatch.com/ws/1.1/'
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })


}

getApi()
