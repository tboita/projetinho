//lenght
let texto = 'olá eu sou o Tony';
console.log(texto.length);

//indexof - caso não exista a palavra ou o carctere irá retornar em -1
console.log(texto.indexOf("sou"));

//slice

console.log(texto.slice(0,3));// seleciona as palavras entre os números colocados

//posso pegar as informações de acordo com o que eu quero e isso não altera o texto original.
let palavra = texto.slice(0,3);
console.log(palavra);
console.log(texto);

// .trim() - retirar espaços sempre no começo ou no final.
console.log(texto.trim())

//split(" ") - converte um texto em um array ou um carctere dentro do parentese
console.log(texto.split(' '))

//replace permite trocar alterar uma parte do texto/ códigos
console.log(texto.replace("Tony", "Jean"))