const dark = document.getElementById('dark');
const principal = document.getElementById('principal');
const btn = document.getElementsByClassName('btn');
const borracha = document.getElementById('borracha')



dark.addEventListener('click', () =>{

    if (document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = 'grey'
        principal.style.backgroundColor = 'lightpurple'
        principal.style.color = 'black'
    }

    else{
        document.body.style.backgroundColor = 'white'
        principal.style.backgroundColor = 'lightpurple'
        principal.style.color = 'white'
    }
})



