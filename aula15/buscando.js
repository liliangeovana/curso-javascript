var num = [5, 3, 9, 8, 2]

num.push(1)
num.sort()

console.log(num)
console.log (`o vetor tem ${num.length} posições`)
console.log (`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(2)

if (pos == -1){
    console.log ('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}