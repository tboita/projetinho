//exemplo II

//modo declarativo
function somar(a,b){
    //código
    console.log("Estou Somando")
    return a + b 
}
let resultadoSomar = somar(1,2);
console.log(resultadoSomar);

//modo expressão
const multiplicar = function(a,b){
    //código
    console.log("estou caminhando")
    return a * b 
}
let resultadoMultiplicar = multiplicar(2,2);
console.log(resultadoMultiplicar);

//global tudo que está fora da função
// local somente dentro da função
