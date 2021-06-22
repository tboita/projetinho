//map
//let numerospares = [2, 4, 6, 8, 10];
//numerospares.map(function(valor){
//console.log(valor*2)
//})

//do jeito abaixo retorna em array
let numerospares = [2,4,6,8,10];

let numerosParesDobro = numerospares.map(function(valor){
return valor*2;
})
console.log(numerosParesDobro)

//filtrer - retornar um array mas com filtros que queremos
let numerosFiltrados = numerospares.filter(function(valor){
    return valor > 6
})
console.log(numerosFiltrados)

// reduce

let somaPares = numerospares.reduce(function(acum, valor){
    return acum + valor
})
console.log(somaPares)

//forech

numerospares.forEach(function(valor, indice){
    console.log("o indice"  +  indice + "tem o valor:" + valor)
})
console.log(numerospares)
