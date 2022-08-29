const Api_Key = 'a0ad9bc5d78247124ae4492e01c51b1b'
const url_img = 'https://image.tmdb.org/t/p/w500/'



fetch('https://api.themoviedb.org/3/tv/popular?api_key=a0ad9bc5d78247124ae4492e01c51b1b&language=pt-BRS&page=1'
).then((response) =>{
    return response.json();
}).then((jsonParsed) =>{

    const filmes_populares = document.querySelector('.carrosel');
    const fundo = document.querySelector('.fundo_info')

    jsonParsed.results.forEach(element =>{

        const title = element.name
        const descrição = element.overview
        const img = element.poster_path
        const pontuação = element.vote_average

        
        filme_popular(title,descrição,img,pontuação, filmes_populares,fundo);

    })

    console.log(jsonParsed)
})

function filme_popular(title, descrição, img, pontuação, filmes_populares){

    const divPai = document.createElement('div')
    const fundo = document.createElement('div')
    const div = document.createElement('div')
    const divInfo = document.createElement('div')
    const divButton = document.createElement('div')
    const button_assistir = document.createElement('button')
    const button_infor = document.createElement('button')
    const imagem = document.createElement('img')
    const divFilho = document.createElement('div')
    const titulo = document.createElement('h4')
    const pont = document.createElement('p')
    const linkAssistir = document.createElement('a')
    const linkDetalhes = document.createElement('a')

    titulo.textContent = title
    pont.textContent = pontuação
    imagem.src = url_img + img
    button_assistir.textContent= "Assistir"
    button_infor.textContent="Detalhes"

    divPai.classList.add('item_filmes')
    divFilho.classList.add('conteudo_filme')
    imagem.classList.add('box')
    div.classList.add('img_filme')
    divButton.classList.add('button_filme')
    button_infor.classList.add('button_info')
    button_assistir.classList.add('assistir')
    divInfo.classList.add('info_filme')
    fundo.classList.add('fundo_info')

    filmes_populares.appendChild(fundo)
    fundo.appendChild(divPai)
    divPai.appendChild(div)
    divPai.appendChild(divFilho)
    divPai.appendChild(divInfo)
    divPai.appendChild(divButton)
    divButton.appendChild(linkAssistir)
    linkAssistir.appendChild(button_assistir)
    linkDetalhes.appendChild(button_infor)
    divButton.appendChild(linkAssistir)
    divButton.appendChild(linkDetalhes)
    div.appendChild(imagem)
    divFilho.appendChild(titulo)
    divInfo.appendChild(pont)
}
