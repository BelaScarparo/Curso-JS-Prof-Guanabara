function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro!]Verifique os dados e tente novamente.')
    }else{ 
        fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe_menino.png')
                document.body.style.background = '#e2cd9f'
                    //bebe
            } else if (idade < 18) {
                img.setAttribute('src','menino.png')
                document.body.style.background = '#e3c232'
                //criança
            } else if (idade < 29) {
                img.setAttribute('src', 'jovem_homem.png')
                document.body.style.background = '#5fb3b1'
                    //jovem
            } else if (idade < 55) {
                img.setAttribute('src', 'homem.png')
                document.body.style.background = '#3f8f8d'
                //adulto
            } else {
                img.setAttribute('src', 'senhor.png')
                document.body.style.background = '#999393'
                //idoso
            }
            
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade <10) {
                img.setAttribute('src', 'bebe_menina.png')
                document.body.style.background = '#e2cd9f'
                //bebe
            }else if (idade < 18) {
                img.setAttribute('src', 'menina.png')
                document.body.style.background = '#f77ce3'
                //criança
            } else if (idade < 29) {
                img.setAttribute('src', 'jovem_mulher.png')
                document.body.style.background = '#68fc99'
                //jovem
            } else if (idade < 55) {
                img.setAttribute('src', 'mulher.png')
                document.body.style.background = '#f2a5bf'
                //adulto
            } else {
                img.setAttribute('src', 'senhora.png')
                document.body.style.background = '#ffebb5'
            }

        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    

}

function carregar() {
    var data = new Date()
    var minuto = data.getMinutes()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
}