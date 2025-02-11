const dark = document.getElementById('dark');
const principal = document.getElementById('principal');
const btn = document.getElementsByClassName('btn');
const borracha = document.getElementById('borracha')



dark.addEventListener('click', () =>{

    if (document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor = 'lightblue'
        principal.style.backgroundColor = 'lightgreen'
        principal.style.color = 'black'
        // document.body.style.backgroundColor = 'lightgrey'
        // document.body.style.color = '#000000';
        // principal.style.backgroundColor = 'pink';
        // principal.style.font = '#ffffff'
    }
    else{
        document.body.style.backgroundColor = 'black'
        principal.style.backgroundColor = 'grey'
        principal.style.color = 'white'
        div.style.backgroundColor = 'red'
        // principal.style.backgroundColor = 'grey';
        // document.btn.style.backgroundColor ='grey';
        // document.btn.style.color = '#ffffff';
        // btn.style.backgroundColor = 'brown';
        // document.body.style.color = '#ffffff'
    }
})



