// Capturando os botões da calculadora

const zero = document.getElementById('zero');
const um = document.getElementById('um');
const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');

const btn = document.getElementsByClassName('btn');

const divisao = document.getElementById('divisao');
const multiplicacao = document.getElementById('multiplicacao');
const adicao = document.getElementById('adicao');
const subtracao = document.getElementById('subtracao');
const ponto = document.getElementById('ponto');
const igual = document.getElementById('igual');

const tela = document.getElementById('tela');
const borracha = document.getElementById('borracha');
const opcoes = document.getElementById('opcoes');




// function Cliques(){
//     // opcoes = zero.innerText = 0
    
// }

const cliq = []
let array = [cliq]

function clicou(){
    zero.addEventListener("click", ()=>{
        cliq.push(0)
        opcoes.innerText = cliq.join("")
        
    })
    um.addEventListener("click", ()=>{
        cliq.push(1)
        opcoes.innerText = cliq.join("")
        
    })
    dois.addEventListener("click", ()=>{
        cliq.push(2)
        opcoes.innerText = cliq.join("")
        
    })
    tres.addEventListener("click", ()=>{
        cliq.push(3)
        opcoes.innerText = cliq.join("")
        
    })
    quatro.addEventListener("click", ()=>{
        cliq.push(4)
        opcoes.innerText = cliq.join("")
        
    })
    cinco.addEventListener("click", ()=>{
        cliq.push(5)
        opcoes.innerText = cliq.join("")
        
    })
    seis.addEventListener("click", ()=>{
        cliq.push(6)
        opcoes.innerText = cliq.join("")
        
    })
    sete.addEventListener("click", ()=>{
        cliq.push(7)
        opcoes.innerText = cliq.join("")
        
    })
    oito.addEventListener("click", ()=>{
        cliq.push(8)
        opcoes.innerText = cliq.join("")
        
    })
    nove.addEventListener("click", ()=>{
        cliq.push(9)
        opcoes.innerText = cliq.join("")
        
    })
}

clicou()

function Limpar(){
    opcoes.innerText = array.splice(cliq)
}


console.log(cliq);
cliq.length

// O comportamento que espero deste array é que 
// 


//digite um nº
//escolha a operação
//digite o segundo nº
//mostrar o resultado


// let guardar = [];

// function guardar(){
//     addEventListener('onmouseup', ()=> {
//         guardar
//     })
// }


// })

// function clique(){
//     opcoes.innerHTML = (0)

// }

// quando o usuário clicar no botão, a opção escolhida deve aparecer na tela
// se ele clicar em mais de um, o programa não deve apagar o último número digitado,e sim concatenar


