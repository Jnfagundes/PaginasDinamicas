let titulo = document.querySelector('h1');

titulo.innerText = 'Foi colocado via JS';

console.log(titulo.innerText)

let div = document.querySelector('div');

div.innerHTML = `
    <p>Primeiro parágrafo</p>
    <p>Segundo parágrafo</p>
    <p>Terceiro parágrafo</p>
    <p>Quarto parágrafo</p>
`
