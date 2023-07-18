function contar(){
    var txtInicio = document.getElementById('inicio')
    var txtFim= document.getElementById('fim')
    var txtPasso = document.getElementById('passo')
    var resultado = document.getElementById('resultado')
    
    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0 ){
        alert('[ERRO] Verifique os dados')
    }else{
        var i = Number(txtInicio.value)
        var f = Number (txtFim.value)
        var p = Number(txtPasso.value)

        resultado.innerHTML = "Contando: "
        if (i < f){
            for (var c = i; c <= f; c +=p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for (var c = i; c >= f; c-=p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }

            resultado.innerHTML += `\u{1F6A9}`
    }
}