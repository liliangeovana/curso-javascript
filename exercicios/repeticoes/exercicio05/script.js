var array = []
var numero = document.querySelector('input#txtnumero')
var lista = document.querySelector('select#txtlista')
var res = document.querySelector('div#resultado')

function eNumero(n){
    if(Number(n)>=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function emLista(n, l){
    for (var pos = 0; pos < l.length; pos++){
        if (l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }
}

function adicionar(){
    
    if (eNumero(numero.value) && !emLista(numero.value, array)){
        array.push(Number(numero.value))

        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        
        res.innerHTML=' '
        numero.focus()
    }else{
        alert('[ERRO] Dado inválido ou já cadastrado')
    }

    
}

function finalizar(){
    if (array.length == 0){
        alert ('Cadastre dados para finalizar')
    }else{
        var total = array.length
        var maior = array[0]
        var menor = array [0]
        var soma = 0

        for (var pos = 0; pos < array.length; pos++){
            soma += array[pos]
            if (array[pos] < menor){
                menor = array[pos]
            }
            if (array[pos] > maior){
                maior = array[pos]
            }
        }
    }

    var media = soma/total
    res.innerHTML=' '
    res.innerHTML += `<p>O total de valores cadastrados é: ${total}</p>`
    res.innerHTML += `<p>O menor valor cadastrado é: ${menor}</p>`
    res.innerHTML += `<p>O maior valor cadastrado é: ${maior}</p>`
    res.innerHTML += `<p>A soma dos cadastrado é: ${soma}</p>`
    res.innerHTML += `<p>A média dos cadastrado é: ${media}</p>`
}

