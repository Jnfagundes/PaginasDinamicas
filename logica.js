const dark = document.getElementById('dark');

dark.addEventListener('click', () =>{

    if (document.body.style.backgroundColor === 'green'){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = '#000000'; 
    }
    else{
        document.body.style.backgroundColor = 'green'
        document.body.style.color = '#ffffff'; 
    }
})

