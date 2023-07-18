var num = [5, 3, 9, 8, 2]

num.push(1) // acresta o valor 1 na ultima posiçãp
num.sort() // coloca em ordem

console.log(num) // exibe: [ 1, 2, 3, 5, 8, 9 ]
console.log (`o vetor tem ${num.length} posições`) //exibe quantas posições
console.log (`O primeiro valor do vetor é ${num[0]}`) //exibe qual o primeiro valor

var pos = num.indexOf(2) //busca se existe o valor 2 no array

if (pos == -1){
    console.log ('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}