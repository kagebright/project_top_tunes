const queryURL = 'https://api.deezer.com/user/2529/playlists'



function getApi() {

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = data[i].html_url;
                repoList.appendChild(listItem);
            }
        });
}