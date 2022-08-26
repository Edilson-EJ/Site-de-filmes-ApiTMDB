
const Api_Key = 'a0ad9bc5d78247124ae4492e01c51b1b'
const url_img = 'https://image.tmdb.org/t/p/w500/'



fetch('https://api.themoviedb.org/3/movie/popular?api_key=a0ad9bc5d78247124ae4492e01c51b1b&language=pt-BR&page=2'
).then((response) =>{
    return response.json();
}).then((jsonParsed) =>{

    const filmes_populares = document.querySelector('.filmes_populares');

    jsonParsed.results.forEach(element =>{


        const img = element.poster_path

        filme_popular(img, filmes_populares);

    })

    console.log(jsonParsed)
})

function filme_popular(img,filmes_populares){

    const divPai = document.createElement('div')
    const imagem = document.createElement('img')
    
    imagem.src = url_img + img

    divPai.classList.add('item')
    imagem.classList.add('box-filme','center')

    filmes_populares.appendChild(divPai)
    divPai.appendChild(imagem)
    

}