// const array = [1, 7];

// console.log(array);

// array.push(12);
// array.push(27);
// console.log(array);

// array.append(30)

// console.log(array);

let num = Number(prompt("Digite um número: "))

alert(`Digite: + Adição
            -  Subtração
            *  Multiplicação
            /  Divisão`)
let op = prompt("Escolha uma operação: ")

let num2 = Number(prompt("Digite outro número: "))

function Calc(){
    if (op === "+"){
        alert("A soma é: "+ (num + num2))
    }
    else if (op === "-"){
        alert("A subtração é: "+ (num - num2))
    }
    else if (op === "*"){
        alert("O produto é: "+ (num * num2))
    }
    else if (op === "/"){
        alert("O quociente é: "+ (num / num2))
    }
    else{
        alert("Inválido")
    }
}

Calc()