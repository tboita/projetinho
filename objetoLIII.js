// this
let carro = {
    nome: "fox",
    ano: 2010,
    cor: "branco",
    ligar: function(){
        console.log("O carro"+ this.nome +"está ligado")
    }
}
carro.ligar()


// new
function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro
    this.ano = anoCarro
}
let civic = new Carro("Civic", "2019");
let gol = new Carro("Gol", "2017")
console.log(gol);

