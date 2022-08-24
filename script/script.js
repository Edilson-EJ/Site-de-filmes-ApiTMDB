
const Api_Key = 'a0ad9bc5d78247124ae4492e01c51b1b'

fetch('https://api.themoviedb.org/3/tv/popular?api_key=a0ad9bc5d78247124ae4492e01c51b1b&language=en-US&page=50'
).then((response) =>{
    return response.json();
}).then((jsonParsed) =>{
    console.log(jsonParsed)
})