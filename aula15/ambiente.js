var valores = [2, 4, 5, 9, 10, 15]

/*(for (var pos = 0; pos <=valores.length; pos++){
    console.log (`A posição ${pos} tem valor ${valores[pos]}`)
}*/

for (var pos in valores){
    console.log (`A posição ${pos} tem valor ${valores[pos]}`)
}