function tabuada(){
    var txtNumero = document.querySelector('input#txtnumero')
    var tab = document.querySelector ('select#selectOp')

   if (txtNumero.value.length == 0){
        alert ('[ERRO] Preencha o campo [Número]')
   }else{
        var n = Number(txtNumero.value)
        tab.innerHTML = ''

        for (var i= 1; i <=10; i++){
            var m = i * n 
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${m}`
            item.value = `${c}`
            tab.appendChild(item)
        }
   }
}