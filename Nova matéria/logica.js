let titulo = document.querySelector('h1');

titulo.innerText = 'Foi colocado via JS';

console.log(titulo.innerText)

//let div = document.querySelector('div');

// div.innerHTML = `
//     <p>Primeiro parágrafo</p>
//     <p>Segundo parágrafo</p>
//     <p>Terceiro parágrafo</p>
//     <p>Quarto parágrafo</p>
// `
document.body.style.backgroundColor = 'beige'

const divisao = document.createElement('div')
divisao.innerHTML = `
    <p id = "title">Criando elementos com Java Script</p>
    <img id="imagem" src = "Imagens/Elementos_JS.png">
    `
divisao.style.width = '90%'
divisao.style.height = '30%'
divisao.style.border = 'solid black 1px'
document.body.appendChild(divisao)

