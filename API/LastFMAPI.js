const ACCESS_TOKEN = "a62ac89f85a8c8d78a6e7fe4849aa66c";
const SECRET = "4dccf1d5a95ea8d5a986a9ba0a3b5f69";

export function getAlbumFromNameAndArtist(album, artist) {
    const url = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + ACCESS_TOKEN + "&artist=" + artist +"&album=" + album + "&format=json";
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
} 
