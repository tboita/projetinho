// com array
let frutas = ["maça", "banana", "uva"];

let frutasDois = ["laranja", "abacate", "goiaba"];

let listacompleta = [...frutas, ...frutasDois]
//console.log(listacompleta)

//com objeto

let pessoa = {
    nome:"tony",
    idade: 34
}
let infoPessoal= {
    tel:"123456789",
    rg: 111111111111,
...pessoa
}
//console.log(infoPessoal)

//com funções
function letras(...para){
    console.log(para)
}
letras("a", "b", "c")

let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ , bariloche, , china, ] = destinosIncriveis;

