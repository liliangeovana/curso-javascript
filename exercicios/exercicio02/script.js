function verificar(){
    //Ano atual (no pc)
    var agora = new Date()
    var anoAtual = agora.getFullYear()

    //Ano digitado pela pessoa
    var txtAno = document.getElementById('txtano')
    var anoDigitado = Number(txtAno.value)

    // Criando um elemento <img> no html
    var img = document.createElement('img')

    //Definindo um atributo para o <img>, no caso <img id='foto'>
    img.setAttribute('id', 'foto')

    if (txtAno.value.length == 0 || anoDigitado > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        //Calculo da Idade
        var calculoIdade = anoAtual - anoDigitado
        
        //Trazendo os ids do documento html
        var sexoFeminino = document.getElementById('feminino')
        var sexoMasculino = document.getElementById('masculino')

        //Verificando se é feminino ou masculino
        if (sexoFeminino.checked){
            var sexo = 'gênero feminino'

            if(calculoIdade >=0 && calculoIdade < 5){
                //Bebê
               img.setAttribute('src', 'img/baby-girl.jpg') 

            }else if (calculoIdade < 10){
                //Criança
                img.setAttribute ('src', 'img/kid-girl.jpg')
            }else if(calculoIdade <= 25){
                //Jovem
                img.setAttribute('src', 'img/jovem-mulher.jpg')
            }else if (calculoIdade < 45){
                //Adulto
                img.setAttribute('src', 'img/adulto-mulher.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'img/idoso-mulher.jpg')
            }
        } else {
            var sexo = 'gênero masculino' 

            if (calculoIdade >=0 && calculoIdade < 5){
                //Bebê
                img.setAttribute('src', 'img/baby-boy.jpg')
            }else if (calculoIdade < 10){
                //Criança
                img.setAttribute ('src', 'img/kid-boy.jpg')
            }else if(calculoIdade <= 25){
                //Jovem
                img.setAttribute('src', 'img/jovem-homem.jpg')
            }else if (calculoIdade < 45){
                //Adulto
                img.setAttribute('src', 'img/adulto-homem.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'img/idoso-homem.jpg')
            }
            
        }



        //Exibindo mensagem de gênero e idade
        texto.innerHTML = `Detectou-se ${sexo} com ${calculoIdade} anos.`

        texto.appendChild(img)
            img.style.width = '200px'
            img.style.height = '200px'
            img.style.borderRadius = '50%'
    
    } 
} 
