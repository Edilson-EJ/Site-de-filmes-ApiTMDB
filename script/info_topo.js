


fetch('https://api.themoviedb.org/3/movie/popular?api_key=a0ad9bc5d78247124ae4492e01c51b1b&language=pt-BR&page=48'
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

        info_topo_pagina(img, title, descrição);

    })

    console.log(jsonParsed)
})


function info_topo_pagina(img, title, descrição){

    const img_pagina = document.querySelector('#series_central')
    const titulo = document.querySelector('#nome_conteudo')
    const intro = document.querySelector('#descrição_conteudo') 

    img_pagina.src = url_img + img
    titulo.textContent = title
    intro.textContent = descrição


}