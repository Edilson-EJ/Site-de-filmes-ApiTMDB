
const Api_Key = 'a0ad9bc5d78247124ae4492e01c51b1b'
const url_img = 'https://image.tmdb.org/t/p/w500/'



fetch('https://api.themoviedb.org/3/movie/popular?api_key=a0ad9bc5d78247124ae4492e01c51b1b&language=pt-BR&page=2'
).then((response) =>{
    return response.json();
}).then((jsonParsed) =>{

    const filmes_populares = document.querySelector('.carrosel');

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
    const div = document.createElement('div')
    const divInfo = document.createElement('div')
    const divButton = document.createElement('div')
    const button = document.createElement('button')
    const button_infor = document.createElement('button')
    const imagem = document.createElement('img')
    const divFilho = document.createElement('div')
    const titulo = document.createElement('p')
    const data = document.createElement('p')
    const pont = document.createElement('p')

    titulo.textContent = title
    data.textContent = data_lan
    pont.textContent = pontuação
    imagem.src = url_img + img
    button.textContent= "Assistir"
    button_infor.textContent="Informações"

    divPai.classList.add('item_filmes')

    divFilho.classList.add('conteudo_filme')
    imagem.classList.add('box')
    div.classList.add('img_filme')
    divButton.classList.add('button_filme')
    divInfo.classList.add('info_filme')


    filmes_populares.appendChild(divPai)
    divPai.appendChild(div)
    divPai.appendChild(divFilho)
    divPai.appendChild(divInfo)
    divPai.appendChild(divButton)
    divButton.appendChild(button)
    divButton.appendChild(button_infor)
    div.appendChild(imagem)
    divFilho.appendChild(titulo)
    divInfo.appendChild(data)
    divInfo.appendChild(pont)
}

