
const Api_Key = 'a0ad9bc5d78247124ae4492e01c51b1b'
const url_img = 'https://image.tmdb.org/t/p/w500/'



fetch('https://api.themoviedb.org/3/movie/popular?api_key=a0ad9bc5d78247124ae4492e01c51b1b&language=pt-BR&page=30'
).then((response) =>{
    return response.json();
}).then((jsonParsed) =>{

    const filmes_populares = document.querySelector('#populares');

    jsonParsed.results.forEach(element =>{

        const title = element.title
        const descrição = element.overview
        const img = element.poster_path
        const data_lan = element.release_date
        const pontuação = element.vote_average

        filme_popular(title,descrição,img,data_lan,pontuação, filmes_populares);

    })

    console.log(jsonParsed)
})

function filme_popular(title, descrição, img, data_lan, pontuação, filmes_populares){

    const divPai = document.createElement('div')
    const imagem = document.createElement('img')
    const divFilho = document.createElement('div')
    const titulo = document.createElement('p')
    const descr = document.createElement('p')
    const data = document.createElement('p')
    const pont = document.createElement('p')

    titulo.textContent = title
    descr.textContent = descrição
    data.textContent = data_lan
    pont.textContent = pontuação
    imagem.src = url_img + img

    divPai.classList.add('conteudo')
    divFilho.classList.add('conteudo_filme')

    filmes_populares.appendChild(divPai)
    divPai.appendChild(imagem)
    divPai.appendChild(divFilho)
    divFilho.appendChild(titulo)
    divFilho.appendChild(descr)
    divFilho.appendChild(data)
    divFilho.appendChild(pont)
}