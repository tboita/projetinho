let pessoa = {
    nome: "Vinicius",
    altura: 1.80
}
const{nome, altura} = pessoa;
console.log(nome);

//desestruturação em array
let listaCompras = ["pão", "ovos", "alface"];
const [item1, item2, item3] = listaCompras;
console.log(item1)

let resultado = {
    bariloche: "Bariloche",
    china: "China"
}
let {bariloche, china} = resultado
console.log(bariloche, china)

let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ , bariloche, , china, ] = destinosIncriveis;
console.log(bariloche, china)

let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ , bariloche, , china, ] = destinosIncriveis;

