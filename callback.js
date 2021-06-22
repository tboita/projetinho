//funcao que passa como parametro outra função

const somar = (a, b) => a / b;
const calculadora = (a, b, operacao) => operacao(a, b)
console.log(calculadora(10, 20, somar))


function soma(a,b){
    return a + b
}
function calculadora(a,b, operacao){
return a + b - operacao
}

function operacao (a,b){
return a - b 
}

let resultado = soma(2,3, operacao)
console.log(resultado)
