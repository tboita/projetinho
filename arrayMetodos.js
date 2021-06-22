let cores = ["azul", "verde", "amarelo", "vermelho", "azul"];
console.log(cores);

//push - acrescenta na última posição
cores.push("violeta");
console.log(cores);

//pop - exclui na última posição
cores.pop();
console.log(cores);

//unshift - acrescenta na primeira posição
cores.unshift("roxo");
console.log(cores);

//shift - exclui a primeira posição

cores.shift();
console.log(cores);

//indexof

console.log(cores.indexOf('vermelho'));

//lastIndexOf

console.log(cores.lastIndexOf('azul'));


//join - insere um carctere entre as palavras
console.log(cores.join("/"));
