//jason.parse() recebe como parametro um dado e retorna um array ou um objeto literal
let listaCompras = ['pão', 'alface', 'ovos'];
let jason = JSON.stringify(listaCompras);
let novo = JSON.parse(jason) //altera a alteração do stringfy
console.log(novo);


//jason.stringify() faz o contrário recebe um array ou um objeto literal e retorna uma string do tipo jason.

let pessoa = {
    nome: "tony",
    idade: 34,
    altura: 1.7
}
let jason = JSON.stringify(pessoa);
let novo = JSON.parse(jason); //altera a alteração do stringfy

console.log(novo);


