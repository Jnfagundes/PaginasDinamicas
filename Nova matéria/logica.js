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
    <img id="imagem" src = "Imagens/Elementos_JS.png">
    <p id = "title">Criando elementos com Java Script</p>
    `
divisao.style.width = '50%'
divisao.style.height = '50%';
divisao.style.display = 'flex';
divisao.style.padding = '0px';
divisao.style.margin = 'auto';
divisao.style.marginTop = '-30px';
// divisao.style.border = 'solid 1px black'

document.body.appendChild(divisao);

let title = document.getElementById('title');

title.style.fontSize = '2rem';
title.style.textDecoration = 'underline';
title.style.textDecorationColor = 'blue'

document.divisao.appendChild(title)

let 