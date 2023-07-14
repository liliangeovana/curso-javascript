function carregar(){
var hora = document.getElementById('hora')
var img = document.getElementById('foto')
    var data = new Date()
    var horaAtual = data.getHours();

    hora.innerHTML = `Agora são ${horaAtual} horas`

    if (horaAtual >= 0 && horaAtual < 12){ 
        img.src = 'img/amanhecer.jpg'
        
    }else if (horaAtual>=12 && horaAtual < 18){   
        img.src = "img/tarde.jpg"
        document.body.style.background = '#ffc175'
    }else{ 
        img.src = "img/noite.jpg"
        document.body.style.background = '#304b7c'
    }
}